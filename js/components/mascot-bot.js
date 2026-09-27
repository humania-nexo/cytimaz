/**
 * ====================================================================
 * CYTIMAZ - COMPONENTE JS: MASCOTA ASISTENTE VIRTUAL INTELIGENTE ("TINA")
 * ====================================================================
 * Incluye motor de NLP ligero para normalización de texto y detección
 * de intenciones / palabras clave en tiempo real.
 */

function initMascotBot() {
  const launcherBtn = document.getElementById("mascot-launcher-btn");
  const speechBubble = document.getElementById("mascot-speech-bubble");
  const chatWindow = document.getElementById("mascot-chat-window");
  const closeBtn = document.getElementById("chat-close-btn");
  const messagesBody = document.getElementById("chat-messages-body");
  const quickOptionsContainer = document.getElementById("chat-quick-options");
  const inputForm = document.getElementById("chat-input-form");
  const userInput = document.getElementById("chat-user-input");
  const sendBtn = document.getElementById("chat-send-btn");

  if (!launcherBtn || !chatWindow || !window.CYTIMAZ_BOT_DATA) return;

  const botData = window.CYTIMAZ_BOT_DATA;
  let isChatOpen = false;
  let hasStarted = false;

  // Toggle abrir / cerrar chat
  launcherBtn.addEventListener("click", toggleChat);
  if (speechBubble) {
    speechBubble.addEventListener("click", toggleChat);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", toggleChat);
  }

  function toggleChat() {
    isChatOpen = !isChatOpen;
    if (isChatOpen) {
      chatWindow.classList.add("active");
      if (speechBubble) speechBubble.style.display = "none";
      if (!hasStarted) {
        startConversation();
        hasStarted = true;
      }
      // Enfocar input si no es dispositivo táctil muy pequeño
      if (userInput && window.innerWidth > 768) {
        setTimeout(() => userInput.focus(), 300);
      }
    } else {
      chatWindow.classList.remove("active");
    }
  }

  // Iniciar conversación con saludo de Tina
  function startConversation() {
    messagesBody.innerHTML = "";
    addBotMessage(botData.mascot.greeting);
    renderQuickOptions();
  }

  // Renderizar opciones de preguntas rápidas
  function renderQuickOptions() {
    quickOptionsContainer.innerHTML = "";
    botData.quickOptions.forEach(opt => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `chat-option-btn ${opt.highlight ? "highlight" : ""}`;
      btn.innerHTML = `
        <span>${opt.label}</span>
        <span>➔</span>
      `;
      btn.addEventListener("click", () => handleOptionClick(opt));
      quickOptionsContainer.appendChild(btn);
    });
  }

  // Manejar clic en una pregunta rápida predefinida
  function handleOptionClick(option) {
    addUserMessage(option.label);

    if (option.id === "whatsapp_directo") {
      const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526692682093";
      const waText = encodeURIComponent(botData.responses.whatsapp_directo.whatsappMessage);
      window.open(`https://wa.me/${waNumber}?text=${waText}`, "_blank");
    }

    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const resp = botData.responses[option.id] || findResponseByIntent(option.id);
      if (resp) {
        displayBotResponse(resp);
      }
    }, 450);
  }

  // Manejar envío de mensaje por formulario/input de texto
  if (inputForm && userInput) {
    inputForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const rawText = userInput.value.trim();
      if (!rawText) return;

      // 1. Mostrar mensaje del usuario
      addUserMessage(rawText);
      userInput.value = "";

      // 2. Procesar respuesta de Tina con NLP
      showTypingIndicator();

      setTimeout(() => {
        removeTypingIndicator();
        const response = processUserQuery(rawText);
        displayBotResponse(response);
      }, 500);
    });
  }

  // Normalización exhaustiva de texto para NLP
  function normalizeText(text) {
    if (!text) return "";
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos y diacríticos
      .replace(/[^a-z0-9\s]/g, " ")   // Reemplazar signos y puntuación por espacios
      .replace(/\s+/g, " ")           // Reducir espacios múltiples
      .trim();
  }

  // Motor de coincidencia semántica e intenciones
  function processUserQuery(query) {
    const cleanQuery = normalizeText(query);
    if (!cleanQuery) return botData.fallback;

    const knowledgeBase = botData.knowledgeBase || [];
    let bestMatch = null;
    let highestScore = 0;

    // Tokenizar palabras del usuario
    const queryTokens = cleanQuery.split(" ").filter(t => t.length > 1);

    for (const item of knowledgeBase) {
      let score = 0;
      const itemKeywords = item.keywords || [];

      for (const kw of itemKeywords) {
        const cleanKw = normalizeText(kw);

        // 1. Coincidencia exacta de frase completa (puntuación alta)
        if (cleanQuery === cleanKw) {
          score += 25;
        } else if (cleanQuery.includes(cleanKw)) {
          // Si la consulta contiene la frase clave completa
          score += 15 + (cleanKw.split(" ").length * 3);
        }

        // 2. Coincidencia de tokens individuales
        const kwTokens = cleanKw.split(" ").filter(k => k.length > 1);
        for (const qToken of queryTokens) {
          if (kwTokens.includes(qToken)) {
            score += 4;
          } else if (qToken.length >= 4 && kwTokens.some(k => k.includes(qToken) || qToken.includes(k))) {
            // Coincidencia parcial (subcadenas, plurales/singulares)
            score += 2;
          }
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    // Umbral mínimo de confianza para aceptar la respuesta
    if (highestScore >= 2 && bestMatch) {
      return bestMatch;
    }

    // Si no hubo coincidencia fuerte, intentar detectar números de capacidad directa
    const capacityMatch = detectCapacityInQuery(cleanQuery);
    if (capacityMatch) {
      const matchedItem = knowledgeBase.find(k => k.id === capacityMatch);
      if (matchedItem) return matchedItem;
    }

    // Fallback por defecto
    return botData.fallback;
  }

  // Detector auxiliar de capacidades en texto
  function detectCapacityInQuery(cleanText) {
    if (cleanText.includes("1100") || cleanText.includes("1 100") || cleanText.includes("mil cien")) return "capacidad_1100";
    if (cleanText.includes("450") || cleanText.includes("cuatrocientos")) return "capacidad_450";
    if (cleanText.includes("600") || cleanText.includes("seiscientos")) return "capacidad_600";
    if (cleanText.includes("800") || cleanText.includes("ochocientos")) return "capacidad_800";
    if (cleanText.includes("1300") || cleanText.includes("1 300") || cleanText.includes("mil trescientos")) return "capacidad_1300";
    if (cleanText.includes("3000") || cleanText.includes("3 000") || cleanText.includes("tres mil")) return "capacidad_3000";
    if (cleanText.includes("5500") || cleanText.includes("5 500") || cleanText.includes("cinco mil")) return "capacidad_5500";
    if (cleanText.includes("10000") || cleanText.includes("10 000") || cleanText.includes("diez mil")) return "capacidad_10000";
    if (cleanText.includes("200") || cleanText.includes("tambo") || cleanText.includes("doscientos")) return "capacidad_200";
    return null;
  }

  function findResponseByIntent(id) {
    const knowledgeBase = botData.knowledgeBase || [];
    return knowledgeBase.find(k => k.id === id);
  }

  // Renderizar respuesta de Tina en el chat
  function displayBotResponse(resp) {
    let fullHtml = `<p>${formatMarkdown(resp.text)}</p>`;

    if (resp.bullets && resp.bullets.length > 0) {
      fullHtml += `<ul>${resp.bullets.map(b => `<li>${formatMarkdown(b)}</li>`).join("")}</ul>`;
    }

    // Botón de acción hacia WhatsApp
    const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526692682093";
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(resp.whatsappMessage || botData.mascot.greeting)}`;
    const ctaLabel = resp.ctaText || "Cotizar por WhatsApp";

    fullHtml += `
      <div style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #E2E8F0;">
        <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="width: 100%; font-size: 0.8rem;">
          💬 ${ctaLabel}
        </a>
      </div>
    `;

    addBotMessage(fullHtml);

    // Renderizar botón para consultar otras dudas o ver sugerencias
    setTimeout(() => {
      renderBackToMenuOption();
    }, 250);
  }

  function renderBackToMenuOption() {
    quickOptionsContainer.innerHTML = `
      <button type="button" class="chat-option-btn highlight" id="btn-back-menu" style="justify-content: center; text-align: center;">
        🔄 Ver sugerencias y preguntas frecuentes
      </button>
    `;
    document.getElementById("btn-back-menu")?.addEventListener("click", () => {
      renderQuickOptions();
    });
  }

  // Funciones auxiliares de burbujas
  function addBotMessage(html) {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble-bot";
    bubble.innerHTML = html;
    messagesBody.appendChild(bubble);
    scrollToBottom();
  }

  function addUserMessage(text) {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble-user";
    bubble.textContent = text;
    messagesBody.appendChild(bubble);
    scrollToBottom();
  }

  function showTypingIndicator() {
    const typing = document.createElement("div");
    typing.className = "chat-bubble chat-bubble-bot";
    typing.id = "chat-typing-indicator";
    typing.innerHTML = `
      <span style="display: inline-flex; gap: 6px; align-items: center; color: var(--color-text-muted); font-size: 0.8rem; font-style: italic;">
        <span style="display: inline-block; width: 6px; height: 6px; background-color: var(--color-primary); border-radius: 50%; animation: blinkDots 1.2s infinite ease-in-out;"></span>
        Tina está escribiendo...
      </span>
    `;
    messagesBody.appendChild(typing);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    const typing = document.getElementById("chat-typing-indicator");
    if (typing) typing.remove();
  }

  function scrollToBottom() {
    messagesBody.scrollTop = messagesBody.scrollHeight;
  }

  function formatMarkdown(text) {
    if (!text) return "";
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");
  }
}

if (typeof window !== "undefined") {
  window.initMascotBot = initMascotBot;
}

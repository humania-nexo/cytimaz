/**
 * ====================================================================
 * CYTIMAZ - COMPONENTE JS: MASCOTA ASISTENTE VIRTUAL ("TINACÍN")
 * ====================================================================
 */

function initMascotBot() {
  const launcherBtn = document.getElementById("mascot-launcher-btn");
  const speechBubble = document.getElementById("mascot-speech-bubble");
  const chatWindow = document.getElementById("mascot-chat-window");
  const closeBtn = document.getElementById("chat-close-btn");
  const messagesBody = document.getElementById("chat-messages-body");
  const quickOptionsContainer = document.getElementById("chat-quick-options");
  const footerCta = document.getElementById("chat-footer-cta");

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
    } else {
      chatWindow.classList.remove("active");
    }
  }

  // Iniciar conversación con saludo de Tinacín
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
      btn.className = `chat-option-btn ${opt.highlight ? "highlight" : ""}`;
      btn.innerHTML = `
        <span>${opt.label}</span>
        <span>➔</span>
      `;
      btn.addEventListener("click", () => handleOptionClick(opt));
      quickOptionsContainer.appendChild(btn);
    });
  }

  // Manejar clic en una pregunta frecuente
  function handleOptionClick(option) {
    // 1. Mostrar mensaje del usuario
    addUserMessage(option.label);

    // 2. Si es WhatsApp directo, abrir inmediatamente
    if (option.id === "whatsapp_directo") {
      const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526692516688";
      const waText = encodeURIComponent(botData.responses.whatsapp_directo.whatsappMessage);
      window.open(`https://wa.me/${waNumber}?text=${waText}`, "_blank");
    }

    // 3. Simular escritura y responder
    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const resp = botData.responses[option.id];
      if (resp) {
        let fullHtml = `<p>${resp.text}</p>`;
        if (resp.bullets && resp.bullets.length > 0) {
          fullHtml += `<ul>${resp.bullets.map(b => `<li>${formatMarkdown(b)}</li>`).join("")}</ul>`;
        }

        // Añadir botón de acción hacia WhatsApp
        const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526692516688";
        const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(resp.whatsappMessage)}`;
        
        fullHtml += `
          <div style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #E2E8F0;">
            <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="width: 100%; font-size: 0.8rem;">
              💬 ${resp.ctaText}
            </a>
          </div>
        `;

        addBotMessage(fullHtml);

        // Añadir botón para volver al menú de opciones
        setTimeout(() => {
          renderBackToMenuOption();
        }, 300);
      }
    }, 600);
  }

  function renderBackToMenuOption() {
    quickOptionsContainer.innerHTML = `
      <button class="chat-option-btn highlight" id="btn-back-menu" style="justify-content: center; text-align: center;">
        🔄 Ver otras preguntas y opciones
      </button>
    `;
    document.getElementById("btn-back-menu")?.addEventListener("click", () => {
      renderQuickOptions();
    });
  }

  // Funciones auxiliares de mensajes
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
      <span style="display: inline-flex; gap: 4px; align-items: center; color: var(--color-text-muted);">
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
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  }
}

if (typeof window !== "undefined") {
  window.initMascotBot = initMascotBot;
}

document.addEventListener("DOMContentLoaded", function() {
  // Verifica se o consentimento já foi dado
  if (localStorage.getItem("cookiesAccepted") === "true") {
    return; // Se já foi dado, não exibe o banner
  }

  // Exibe o banner de cookies após 2 segundos
  setTimeout(function() {
    var cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner) {
      cookieBanner.style.display = "flex";
    }
  }, 2000);

  var acceptAllBtn = document.getElementById("accept-all");
  var managePreferencesBtn = document.getElementById("manage-preferences");
  var closeBtn = document.getElementById("close-btn");
  var preferencesModal = document.getElementById("preferences-modal");
  var closeModal = document.getElementById("close-modal");
  var preferencesForm = document.getElementById("preferences-form");

  // Botão "Aceitar Todos"
  if (acceptAllBtn) {
    acceptAllBtn.addEventListener("click", function() {
      var cookieBanner = document.getElementById("cookie-banner");
      if (cookieBanner) {
        cookieBanner.style.display = "none";
      }
      // Salva a informação de consentimento no local storage
      localStorage.setItem("cookiesAccepted", "true");
    });
  }

  // Botão "Gerenciar Preferências"
  if (managePreferencesBtn) {
    managePreferencesBtn.addEventListener("click", function() {
      preferencesModal.style.display = "block";
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente ao topo
      loadPreferences(); // Carrega as preferências salvas ao abrir o modal
    });
  }

  // Função para desmarcar todos os checkboxes exceto essential-cookies
  function desmarcarCheckboxes() {
    var checkboxes = preferencesModal.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      if (checkbox.id !== "essential-cookies") {
        checkbox.checked = false;
      }
    });
  }

  // Função para carregar as preferências salvas do localStorage
  function loadPreferences() {
    var checkboxes = preferencesModal.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      var savedPreference = localStorage.getItem(checkbox.id);
      if (savedPreference !== null) {
        checkbox.checked = savedPreference === 'true';
      }
    });
  }

  // Função para salvar as preferências no localStorage
  function savePreferences() {
    var checkboxes = preferencesModal.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      localStorage.setItem(checkbox.id, checkbox.checked);
    });
  }

  // Botão para fechar o modal de preferências
  if (closeModal) {
    closeModal.addEventListener("click", function() {
      preferencesModal.style.display = "none";
      desmarcarCheckboxes(); // Desmarcar todos os checkboxes exceto essential-cookies ao fechar o modal
    });
  }

  // Fechar o modal ao clicar fora dele
  window.addEventListener("click", function(event) {
    if (event.target === preferencesModal) {
      preferencesModal.style.display = "none";
      desmarcarCheckboxes(); // Desmarcar todos os checkboxes exceto essential-cookies ao clicar fora do modal
    }
  });

  // Submissão do formulário de preferências
  if (preferencesForm) {
    preferencesForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Processa as preferências selecionadas
      savePreferences(); // Salva as preferências no localStorage
      preferencesModal.style.display = "none";
      localStorage.setItem("cookiesAccepted", "true");
    });
  }

  // Botão para fechar o banner de cookies sem aceitar
  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      var cookieBanner = document.getElementById("cookie-banner");
      if (cookieBanner) {
        cookieBanner.style.display = "none";
      }
      // Opcional: Salva uma preferência de não mostrar o banner novamente
      localStorage.setItem("cookiesAccepted", "false");
    });
  }
});
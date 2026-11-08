(function () {
  var caixaSeletor = document.getElementById("seletor-porte");
  if (!caixaSeletor) return;

  var zap = caixaSeletor.getAttribute("data-zap") || "";
  var botoes = caixaSeletor.querySelectorAll(".botao-porte");
  var elBanho = document.getElementById("val-banho");
  var elHigienica = document.getElementById("val-higienica");
  var elTesoura = document.getElementById("val-tesoura");
  var elInclui = document.getElementById("texto-inclui-porte");
  var elTempo = document.getElementById("tempo-estimado-porte");
  var btnAgendar = document.getElementById("btn-agendar-banho");

  function montarZap(numero, msg) {
    var digitos = "55" + String(numero || "").replace(/\D/g, "");
    return "https://wa.me/" + digitos + "?text=" + encodeURIComponent(msg);
  }

  botoes.forEach(function (btn) {
    btn.addEventListener("click", function () {
      botoes.forEach(function (b) {
        var ativo = b === btn;
        b.classList.toggle("botao-porte-ativo", ativo);
        b.setAttribute("aria-pressed", ativo ? "true" : "false");
      });

      var rotulo = btn.getAttribute("data-rotulo") || "";
      var peso = btn.getAttribute("data-peso") || "";
      var banho = btn.getAttribute("data-banho") || "";
      var higienica = btn.getAttribute("data-higienica") || "";
      var tesoura = btn.getAttribute("data-tesoura") || "";
      var tempo = btn.getAttribute("data-tempo") || "";
      var inclui = btn.getAttribute("data-inclui") || "";

      if (elBanho) elBanho.textContent = banho;
      if (elHigienica) elHigienica.textContent = higienica;
      if (elTesoura) elTesoura.textContent = tesoura;
      if (elInclui) elInclui.textContent = inclui;
      if (elTempo) elTempo.textContent = "Tempo médio: " + tempo;

      if (btnAgendar) {
        var mensagem =
          "Olá! Quero agendar atendimento no Patas da Serra para " +
          rotulo +
          " (" +
          peso +
          ") — referência de banho: " +
          banho +
          ". Quais horários estão disponíveis?";
        btnAgendar.setAttribute("href", montarZap(zap, mensagem));
      }
    });
  });
})();

const text1 = document.querySelector(".text1");

// Função para alternar as cores
function alterarCores() {
    if (text1.style.color === "black") {
        // Altera para cores via JavaScript
        text1.style.color = "blue";
        text1.style.backgroundColor = "antiquewhite";
    } else {
        // Volta para as cores originais via CSS
        text1.style.color = "black";
        text1.style.backgroundColor = "#D3D3D3";
    }
}
// Função que mostra a hora atual na página
function mostrarHora() {
    // Cria um objeto Date com a hora atual
    var agora = new Date();
    // Formata a hora de acordo com o fuso horário do Brasil
    var hora = agora.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
    // Seleciona o elemento div com o id "hora"
    var div = document.getElementById("hora");
    // Altera o conteúdo do elemento div com a hora formatada
    div.innerHTML = hora;
  }
  
  // Função que é executada quando o usuário clica no botão
  function clicarBotao() {
    // Chama a função mostrarHora uma vez
    mostrarHora();
    // Cria um intervalo que chama a função mostrarHora a cada 1000 milissegundos (1 segundo)
    setInterval(mostrarHora, 1000);
  }
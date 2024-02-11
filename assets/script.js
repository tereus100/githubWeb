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
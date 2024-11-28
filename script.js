document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário
    document.getElementById("mensagem").classList.remove("oculto");
    this.reset(); 
});
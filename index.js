
var card_leonardo = window.document.getElementById("card_leonardo");
var card_bruna = window.document.getElementById("card_bruna");
var card_samantha = window.document.getElementById("card_samantha");
var setaDireita = window.document.getElementById("seta_direita");
var setaEsquerda = window.document.getElementById("seta_esquerda");

function RolarParaDireita() {
    card_leonardo.style = "display:none";
    card_bruna.style = "display:flex";
    setaDireita.style = "display:none";
    setaEsquerda.style = "display:flex";
}

function RolarParaEsquerda() {
    card_leonardo.style = "display:flex";
    card_bruna.style = "display:none";
    setaDireita.style = "display:flex";
    setaEsquerda.style = "display:none";
}

function Envio_de_email() {
    var email = document.getElementById("email").value;
}
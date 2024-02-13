let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function gerarNumeroAleatorio() {
    return (Math.random() * 10 + 1);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute==numeroSecreto);
}
const resposta1 = "Marte"
const resposta2 = "H2O"
const resposta3 = "Pacífico"
let contador = 0

let pergunta1 = prompt("Qual é o planeta conhecido como “Planeta Vermelho”?");
let pergunta2 = prompt("Qual é o símbolo químico da água?");
let pergunta3 = prompt("Qual é o maior oceano do planeta?");


if (pergunta1 == resposta1) {
    alert("Você acertou!")
    contador++
} else {
    alert("Você errou!")
}

if (pergunta2 == resposta2) {
    alert("Você acertou!")
    contador++
} else {
    alert("Você errou!")
}

if (pergunta3 == resposta3) {
    alert("Você acertou!")
    contador++
} else {
    alert("Você errou!")
}


if(pergunta1 != resposta1 && pergunta2 != resposta2 && pergunta3 != resposta3){
    alert("Você perdeu!")
}

alert("Fim de jogo, você acertou " + contador + " perguntas!")

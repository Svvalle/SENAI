let pergunta1 = prompt("Qual sua idade?");

let pergunta2 = prompt("Você é deficiente? ");

let pergunta3 = prompt("Você é gestante? ");


if(pergunta1 >= 65 || pergunta2 == "s" || pergunta3 == "s"){
     alert("Vá para a fila preferencial")
}else{
    alert("Vá para a fila comum")
}
let idade = prompt("Digite sua idade: ");


if(idade < 16){
   alert("Pessoas com menos de 16 anos não podem entrar nos eventos.")
}
else if(idade >= 16 && idade <= 18){
   alert("Somente acompanhado pelos responsáveis.")
}
else if(idade > 18){
   alert("Maiores de 18 podem entrar no evento.")
}
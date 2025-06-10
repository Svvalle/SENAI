const emailCorreto = "saviom875@gmail.com";

const senhaCorreta = "@Yungsv21";

let email = prompt("Digite seu email: ");

let senha = prompt("Digite sua senha: ");


if (email != emailCorreto && senha == senhaCorreta) {
    alert("Email incorreto!")
    setTimeout(() => {
        alert("Tente novamente.");
    }, 3000);
}
else if (email == emailCorreto && senha != senhaCorreta) {
    alert("Senha incorreta!")
    setTimeout(() => {
        alert("Tente novamente.");
    }, 3000);
}

else if (email != emailCorreto && senha != senhaCorreta) {
    alert("Login e senha incorretos, tente novamente...")
    setTimeout(() => {
        alert("Seja bem vindo!");
    }, 1000);
}

else {
    alert("Login bem-sucedido!");
}
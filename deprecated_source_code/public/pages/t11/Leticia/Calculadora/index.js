var historico = [];
const historicos = () => {
    alert(historico)
    var resultado;
    for (var i = 0; i <= historico.length; i++) {
        resultado = historico[i];
    }
    console.log(resultado);
}

const somar = () => {
    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;
    var resultado = parseInt(primeiroValor) + parseInt(segundoValor);
    alert(resultado)
    historico.push("o resultado da conta: " + primeiroValor + "+" + segundoValor + " foi: " + resultado)
}
const dividir = () => {
    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;
    var resultado = primeiroValor / segundoValor;
    alert(resultado)
    historico.push("o resultado da conta: " + primeiroValor + "/" + segundoValor + " foi: " + resultado)
}
const multiplicar = () => {
    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;
    var resultado = primeiroValor * segundoValor;
    alert(resultado)
    historico.push("o resultado da conta: " + primeiroValor + "*" + segundoValor + " foi: " + resultado)
}
const subtrair = () => {
    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;
    var resultado = primeiroValor - segundoValor;
    alert(resultado)
    historico.push("o resultado da conta: " + primeiroValor + "-" + segundoValor + " foi: " + resultado)
}
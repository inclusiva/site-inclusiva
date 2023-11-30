var historico = [];
const soma = () => {
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value
    var resultados = document.getElementById("resultado")
    var resultado = parseInt(numero1) + parseInt(numero2);
    resultados.value = resultado
    historico.push("o resultado da conta: " + numero1 + ' + ' + numero2 + " = " + resultado)
}
const subtração = () => {
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value
    var resultados = document.getElementById("resultado")
    var resultado = parseInt(numero1) - parseInt(numero2);
    resultados.value = resultado
    historico.push("o resultado da conta: " + numero1 + ' - ' + numero2 + " = " + resultado)
}
const divisão = () => {
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value
    var resultados = document.getElementById("resultado")
    var resultado = parseInt(numero1) / parseInt(numero2);
    resultados.value = resultado
    historico.push("o resultado da conta: " + numero1 + ' / ' + numero2 + " = " + resultado)
}
const multiplicação = () => {
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value
    var resultados = document.getElementById("resultado")
    var resultado = parseInt(numero1) * parseInt(numero2);
    resultados.value = resultado
    historico.push("o resultado da conta: " + numero1 + ' * ' + numero2 + " = " + resultado)
}
const historico1 = () => {
    for (var i = 0; i <= historico.length; i++) {
        alert(historico[i])
    }
}



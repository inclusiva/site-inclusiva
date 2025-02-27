var historico = []

const somar = () => {
    var inputPrimario = document.getElementById("numeroPrimario").value;
    var inputSecundario = document.getElementById("numeroSecundario").value;
    var resultado = parseInt(inputPrimario) + parseInt(inputSecundario)
    alert(resultado)
    historico.push(resultado);
}

const subtrair = () => {
    var inputPrimario = document.getElementById("numeroPrimario").value;
    var inputSecundario = document.getElementById("numeroSecundario").value;
    var resultado = inputPrimario - inputSecundario
    alert(resultado)
    historico.push(resultado);
}

const dividir = () => {
    var inputPrimario = document.getElementById("numeroPrimario").value;
    var inputSecundario = document.getElementById("numeroSecundario").value;
    var resultado = inputPrimario / inputSecundario
    alert(resultado);
    historico.push(resultado);
}

const multiplicar = () => {
    var inputPrimario = document.getElementById("numeroPrimario").value;
    var inputSecundario = document.getElementById("numeroSecundario").value;
    var resultado = inputPrimario * inputSecundario
    alert(resultado)
    historico.push(resultado);
}

const historicos = () => {
    var resultado
    for(var i= 0; i <= historico.length; i++) {
        resultado= historico [i]
console.log(resultado)}
}
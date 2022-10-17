let numero1 = 0;
let numero2 = 0;
let resultado = "";

function somar() {
    numero1 = document.getElementById("n1").value;
    numero2 = document.getElementById("n2").value;
    result = Number(numero1) + Number(numero2);
    return document.getElementById("resultado").value = result;
}

function multiplicar() {
    numero1 = document.getElementById("n1").value;
    numero2 = document.getElementById("n2").value;
    result = Number(numero1) * Number(numero2);
    return document.getElementById("resultado").value = result;
}
function dividir() {
    numero1 = document.getElementById("n1").value;
    numero2 = document.getElementById("n2").value;
    result = Number(numero1) / Number(numero2);
    return document.getElementById("resultado").value = result;
}
function subtrair() {
    numero1 = document.getElementById("n1").value;
    numero2 = document.getElementById("n2").value;
    result = Number(numero1) - Number(numero2);
    return document.getElementById("resultado").value = result;
}
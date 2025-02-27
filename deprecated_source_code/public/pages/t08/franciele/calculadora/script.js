var historico = [];

function pegarDados(sinal) {
  var lista = document.getElementsByClassName("entradas");
  var num1 = Number(lista[0].value);
  var num2 = Number(lista[1].value);
  var resultado = operar(num1, sinal, num2);
  document.getElementById("resultado").value = resultado;
  historico.push(resultado);
}

function trocar() {
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;
  document.getElementById("numero2").value = numero1;
  document.getElementById("numero1").value = numero2;
}

function limpar() {
  document.getElementById("numero1").value = " ";
  document.getElementById("numero2").value = " ";
  document.getElementById("resultado").value = " ";
}

function zerar() {
  document.getElementById("numero1").value = 0;
  document.getElementById("numero2").value = 0;
  document.getElementById("resultado").value = 0;
}

function operar(num1, sinal, num2) {
  switch (sinal) {
    case "+":
      return somar(num1, num2);

    case "-":
      //numerosNaturais();
      return subtrair(num1, num2);

    case "*":
      //numerosNaturais();
      return multiplicar(num1, num2);

    case "/":
      //numerosNaturais();
      return dividir(num1, num2);

    case "P":
      //numerosNaturais();
      return potencia(num1, num2);

    case "R":
      //numerosNaturais();
      return raizQuadrada(num1, num2);
  }
}

function somar(num1, num2) {
  return Number(num1) + Number(num2);
  historico.push();
}

function subtrair(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiplicar(num1, num2) {
  var resultado = 0;
  for (let i = 0; i < num2; i++) {
    resultado = resultado + Number(num1);
  }
  return resultado;
}

function dividir(num1, num2) {
  if (num2 == 0) {
    return "NÃO POOOOOOODE";
  } else {
    return num1 / num2;
  }
}

function potencia(num1, num2) {
  return Math.pow(Number(num1), Number(num2));
}

function raizQuadrada(num1) {
  return Math.sqrt(num1);
}

function numerosNaturais() {
  var somenteNaturais = Boolean(document.getElementById("naturais").checked);
  var resultado = document.getElementById("resultado").value;
  if (somenteNaturais == true && resultado < 0) {
    var resultado2 = 0;
    var mostrarResultado = (document.getElementById(
      "resultado"
    ).value = resultado2);
  }
}

function anterior() {
  var ultimo = historico.pop();
  document.getElementById("resultado").value = ultimo;
  if (ultimo == undefined){
    document.getElementById("resultado").value = "Não tem anterior :( ";
  }
}

function verHistorico() {
  if (historico.length == 0){
      console.log("Historico vazio :( ");
  }
  var texto = "";
  for (var i = 0; i < historico.length; i++) {
    texto = texto + " " + historico[i];
    console.log(historico[i]);
  }
}

function limparHistorico() {
  historico.length = 0;
}
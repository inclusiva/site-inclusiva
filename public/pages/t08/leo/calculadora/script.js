var numerosInput = document.getElementsByClassName("numeros");

var resultadoTela = document.getElementById("resultcalc");

var historicoText = document.getElementById("historico")

var historico = [];

function operar(operador){
 
  var primeironumero = parseInt(numerosInput[0].value);
  var segundonumero = parseInt(numerosInput[1].value);
    
  var naturais = Boolean(document.getElementById('naturais').checked);

  var result;
   
  switch(operador){
   case '+':
      result = somar(primeironumero, segundonumero, naturais);
      resultadoTela.innerText = result;
      break;
   case '-':
      result = subtrair(primeironumero, segundonumero, naturais);
      resultadoTela.innerText = result;
      break;
   case '*':
      result = multiplicar(primeironumero, segundonumero, naturais);
      resultadoTela.innerText = result;
      break;
   case '/':
      result = dividir(primeironumero, segundonumero, naturais);
      resultadoTela.innerText = result;
      break; 
  }
  
  salvarResultado(result)
  
}

function Trocar(){
  var primeiravariavel= document.getElementById('primeironumero').value;
  var segundavariavel= document.getElementById('segundonumero').value;
  
  document.getElementById('primeironumero').value= segundavariavel ;
  document.getElementById('segundonumero').value= primeiravariavel ;
}

function Zerar(){
  document.getElementById('primeironumero').value= 0 ;
  document.getElementById('segundonumero').value= 0 ;
}

function Limpar(){
  document.getElementById('primeironumero').value= "" ;
  document.getElementById('segundonumero').value= "" ;
}

function somar(primeironumero, segundonumero, naturais){
  var resultado = primeironumero + segundonumero;
  if(resultado < 0 && naturais == true){
    return 0;
  } else {
    return resultado;
  }
}
function subtrair(primeironumero, segundonumero, naturais){
  var resultado = primeironumero - segundonumero;
  if(resultado < 0 && naturais == true){
    return 0;
  } else {
    return resultado;
  }
}
function multiplicar(primeironumero, segundonumero, naturais){
  var resultado = 0;
  for (var i=0; i<segundonumero; i++) {
    resultado = resultado + primeironumero;
  }
  if(resultado < 0 && naturais == true){
    return 0;
  } else {
    return resultado;
  }
}
function dividir(primeironumero, segundonumero, naturais){
  if(segundonumero==0){
    alert('Não é possível dividir um número por zero')
  } else {
      var resultado = primeironumero / segundonumero;
      if(resultado < 0 && naturais == true){
        return 0;
      } else {
      return resultado;
      }
  }
}

function verHistorico(){
  var textoHistorico;
  for (var i =0; i < historico.length; i++){
    textoHistorico = historico[i] ;
    console.log(textoHistorico)
  }
   historicoText.innerText = textoHistorico;
}

function limparHistorico(){
  historicoText.innerText = "";
  historico = new Array();
}


function anterior(){
  var ultimo = historico.pop();
  if (ultimo == undefined){
    historicoText.innerText = 'Não tem anterior';
  } else {
    historicoText.innerText = "O ultimo valor valor calculado foi:" +ultimo;
  }
 }

function salvarResultado(result){
  historico.push(result);
}
var numerosInput = document.getElementsByClassName("numeros");

var historico = [];

function operar(operador){
 
  var primeironumero = parseInt(numerosInput[0].value);
  var segundonumero = parseInt(numerosInput[1].value);
    
  var naturais = Boolean(document.getElementById('naturais').checked);

  var result = document.getElementById('result');
   
  switch(operador){
   case '+':
      result.value = somar(primeironumero, segundonumero, naturais);
      break;
   case '-':
      result.value = subtrair(primeironumero, segundonumero, naturais);
      break;
   case '*':
      result.value = multiplicar(primeironumero, segundonumero, naturais);
      break;
   case '/':
      result.value = dividir(primeironumero, segundonumero, naturais);
      break;
  }
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

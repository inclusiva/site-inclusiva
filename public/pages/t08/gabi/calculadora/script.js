var entrandaInput = document.getElementsByClassName("entrada");

var resultadoTela = document.getElementById('resultado');

var historico = [];



function operar(operador){
  var num1 =  parseInt(entrandaInput[0].value)
  var num2 = parseInt(entrandaInput[1].value)
  
  var naturais = Boolean(document.getElementById('selecao').checked);
  
  var result;
  
  if(operador == '+'){
    result = somar(num1, num2);
  }  else if(operador == '-'){
    result = subtrair(num1, num2);
  } else if(operador == '*'){
    result = multiplicar(num1, num2);
  } else if(operador == '/'){
    result = dividir(num1, num2);
  } else {
    alert("Escolha uma operação");
     
  }
     if (naturais == true && result < 0){
        resultadoTela.innerText = 0 ;
      } else {
        resultadoTela.innerText = ' O resultado é: ' + result;
      }
  
       salvarResultado(result);
   }
 

function somar(num1, num2){
  return num1 + num2;
}

function subtrair(num1, num2){
  return num1 - num2;
}
  
function multiplicar(num1, num2){
  var resultado = 0;
  for (var i=0; i < num2; i++) {
     resultado = resultado + num1;
  }
  return resultado;
}


function dividir(num1, num2){
  if (num2 == 0){
    alert ('Não pode-se dividir por zero')
    document.getElementById('resultado') = ' ';
  }
    return  num1 / num2;

}

function verHistorico(){
  var textoHistorico = " ";
  for (var i =0; i < historico.length; i++){
    textoHistorico = textoHistorico + " "+ historico[i] ;
    console.log(historico[i])
  }
   document.getElementById("historico").value = textoHistorico;

}

function limparHistorico(){
  document.getElementById("historico").value = "";
  historico = new array ();
}


function anterior(){
  var ultimo = historico.pop();
  document.getElementById("historico").value = ultimo;
  
  if (ultimo == undefined){
    document.getElementById("historico").value = 'Não tem anterior';
  }
 }

function salvarResultado(result){
  historico.push(result);
}
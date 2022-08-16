var imputs =document.getElementsByClassName("entrada")
var resultadoo =  document.getElementById("resultado");
var historico = []
var comparador= document.getElementById("comparador");
var  vetor = document.getElementsByClassName("entrada")

window.onload=function(){
 //alert('Bem vinda A Calculadora Do Pablinho')
}


function operar(sinal){
  var numA =parseInt(imputs[0].value);
  var numB =parseInt(imputs[1].value);
 
 
  if (sinal == '+'){
     result='Soma = '+ somar(numA, numB);
  }else if (sinal == '-'){
      result='Subtração = ' +  diminuir(numA, numB);
  }else if(sinal == '*'){
      result=`Multiplicação = ${multiplicar(numA, numB)}`;
  }else if(sinal == '/'){
      result='Divisão = ' +  dividir(numA, numB);
  }else {
resultadoo.innerText ='Escolha Uma operação'
  }
 resultadoo.innerText = 'Resultado da ' + result; 
 historico.push(result);
}
 
 
function somar(numA, numB){
return  numA + numB;
}

function diminuir(numA, numB){
 return numA - numB;

}

function multiplicar(numA, numB){ 
  var result = 0;
  
 for (var i=0; i < numB; i++){
    result = result + numA;
  }
  
  return result;
 }

function dividir(numA,numB){
  if(numA==0 || numB ==0){
  alert(' todo valor Dividido por Zero(0) é Zero ')
  }else {
     return numA / numB;
  }
}

function verHist(){
  for (var i=0; i < historico.length; i++){
    alert(historico[i])
  }
}

function anterior(){
  for (var i=historico.length - 1; i>0; i--){
    alert(historico[i])
  }
}

function limparHist(){
  historico=[]
}

function limpar(){
  imputs[0].value=""
  imputs[1].value=""
  resultadoo.innerText='Insira A Operação Acima!!!'
}


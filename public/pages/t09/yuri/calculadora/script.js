   var entrandaInput = document.getElementsByClassName("entrada");

   var  resultadoo = document.getElementById('resultado');
   
   var historico = [];

function operacoes(sinal){  
  var inputUm =  parseInt(entrandaInput[0].value)
  var inputDois =  parseInt(entrandaInput[1].value)
  
  var naturais = Boolean(document.getElementById('selecao').checked);
  
   var result;
  
 if (sinal == 'adicao') {
  result = adicao(inputUm, inputDois);
   
 } else if(sinal == 'subtracao') {
   result = subtracao(inputUm, inputDois);
   
 } else if(sinal == 'multiplicacao') {
   result = multiplicacao(inputUm, inputDois);
   
 } else if(sinal == 'divisao') {
   result = divisao(inputUm, inputDois);
   
 } else {
   alert('Escolha uma operacao')
 }
  if (naturais == true && result < 0){
        resultadoo.innerText = 0 ;
      } else {
        resultadoo.innerText = ' O resultado é: ' + result;
      }  
      
     salvarResultado(result);

}
function adicao(inputUm, inputDois){ 
 return inputUm + inputDois;
}

function subtracao(inputUm, inputDois) {
 return inputUm - inputDois;
}

function multiplicacao(inputUm, inputDois){ 
  var resultado = 0;

      for (var i=0; i < inputDois; i++){
    resultado = resultado + inputUm;
  }
  
  return resultado;
}


function divisao(inputUm, inputDois){
  if (inputDois == 0){
    alert(' Não pode dividir por 0')
    document.getElementById('resultado') = ' ';
  }
 return  inputUm / inputDois; 
 }



function verHistorico(){
  var textoHistorico = " ";
  for (var i =0; i < historico.length; i++){
    textoHistorico = textoHistorico + " "+ historico[i] ;
  }
   document.getElementById("historico").value = textoHistorico;

}


 function limparHistorico(){
  document.getElementById("historico").value = "";
  document.getElementById("historicoAnterior").value = "";
  historico = new array ();
}

function salvarResultado(result){
  historico.push(result);
}

function anterior(){
  var ultimo = historico.pop();
  document.getElementById("historicoAnterior").value = ultimo;
  
  if (ultimo == undefined){
    document.getElementById("historicoAnterior").value = 'Não tem anterior';
  }
  }
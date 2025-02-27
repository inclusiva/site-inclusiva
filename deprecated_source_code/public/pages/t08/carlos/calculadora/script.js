var entrandaInput = document.getElementsByClassName("entrada");

var resultadoo =  document.getElementById("resultado");

var historico = [];



function calcular(sinal){
  var numeroA =  parseInt(entrandaInput[0].value)
  var numeroB = parseInt(entrandaInput[1].value)
     
  var result;
  
  var naturais = Boolean(document.getElementById('selecao').checked);
  
  if (sinal == 'soma'){
     result = soma(numeroA, numeroB);
  }else if (sinal == 'subtrair'){
      result = diminui(numeroA, numeroB);
  }else if(sinal == 'multiplicar'){
      result = multiplica(numeroA, numeroB);
  }else if(sinal == 'dividir'){
     result = dividir(numeroA, numeroB);
     } else if(sinal == 'pontecia'){ 
       result = pontecia(numeroA, numeroB);
      
  }
     if (naturais == true && result < 0){
        resultadoo.innerText = 0 ;
      } else {
        resultadoo.innerText = ' O resultado é: ' + result;
      }
  
  salvarResultado(result);

}
  

function verHistorico(){
  var textoHistorico = " ";
  for (var i =0; i < historico.length; i++){
    textoHistorico = textoHistorico + " "+ historico[i] ;
    console.log(historico[i])
  }
   document.getElementById("historico").value = textoHistorico;

}

 
function soma(numeroA, numeroB){
 return numeroA + numeroB;
}

function diminui(numeroA, numeroB){
 return numeroA - numeroB;

}

function multiplica(numeroA, numeroB){ 
  var result = 0;
  
 for (var i=0; i < numeroB; i++){
    result = result + numeroA;
  }
  
  return result;
 }
  



function dividir(numeroA, numeroB){
  if (numeroB == 0){
    alert(' Não pode dividir por 0')
    document.getElementById('resultado') = ' ';
  }
 return  numeroA / numeroB; 
 }

function limparHistorico(){
  document.getElementById("historico").value = "";
  historico = new array ();
}
  
  function pontecia(numeroA,numeroB){
  return numeroA ** numeroB; 
  }

function salvarResultado(result){
  historico.push(result);
}

function anterior(){
  var ultimo = historico.pop();
  document.getElementById("historico").value = ultimo;
  
  if (ultimo == undefined){
    document.getElementById("historico").value = 'Não tem anterior';
  }
 }
var numeroA = document.getElementById("inpuntUm");
var numeroB = document.getElementById("inpuntDois");
var resultadoo =  document.getElementById("resultado");

function calcular(sinal){
  var result;
   if  (sinal == 'soma'){
     result = soma(numeroA, numeroB);
 }else if (sinal == 'subtrair'){
      result = subtrair(numeroA, numeroB);
  }else if(sinal == 'multiplicar'){
      result = multiplicar(numeroA, numeroB);
  }else if(sinal == 'dividir'){
     result = dividir(numeroA, numeroB);
  
   
  }
 resultadoo.innerText = 'Resultado da conta ' + result; 

}
  



 
function soma(numeroA, numeroB){
return  Number(numeroA.value) + Number(numeroB.value);
}

function subtrair(numeroA, numeroB){
 return Number(numeroA.value) - Number(numeroB.value);

}

function multiplicar(numeroA, numeroB){ 
  var result = 0;
  
 for (var i=0; i < Number(numeroB.value); i++){
    result = result + Number(numeroA.value);
  }
  
  return result;
 }
  


function dividir(numeroA, numeroB){ 
   var result;
  if(Number(numeroB.value) == 0){
  alert('não pode dividir por zero'); 

   
 }
  return  Number(numeroA.value) / Number(numeroB.value);  
   }
function limparCampo(){
numeroA.value = numeroB.value = " ";
  }
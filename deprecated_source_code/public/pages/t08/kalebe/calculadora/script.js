
var todosnumber = document.getElementsByClassName('entrada');
var historico = []



function anula() {
 var num1 = document.getElementById('num1').value= " ";
 var num2 = document.getElementById('num2').value= " ";
 var resu = document.getElementById('result').value= " ";
}

function operar(opcao) {
 
var num1 = Number(todosnumber[0].value);
var num2 = Number(todosnumber[1].value);
  
 if (opcao == '+') {
  calculo = somar(num1, num2);
 }  else if(opcao == '-') {
  calculo = subtrair(num1, num2);
 } else if(opcao == '*') {
  calculo = multiplica(num1, num2);
 } else if(num2 == 0) {
  calculo = 0;
 } else if(opcao == '/') {
  calculo = dividi(num1, num2);
 } 
  
  var somnaty = Boolean(document.getElementById("naty").checked);
  
  if(somnaty&&calculo < 0) {
     calculo = 0 } 
  
 
  document.getElementById('result').value= calculo;  
  
 salva(calculo);
}



function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplica(a, b) {
  var resultadoo = 0;
  for(var i=0; i<b; i++) {
    resultadoo = resultadoo + a;
  }
  return resultadoo
  
}

function dividi(a, b) {
    return  a / b;
}


function salva(call) {  
  historico.push(call); 
}

function Ante() {
  var ulti = historico.pop();
  document.getElementById('historic').value = ulti;
  
  if(ulti == undefined){
    document.getElementById('historic').value= "Não tem anterior";
  }
}

function VHis(lista) {
  var texHis = "";
  for(var i = 0; i < historico.length; i++) {
    texHis = texHis + " , " + historico[i] ;
    console.log(historico[i])
  }
document.getElementById('historic').value= texHis;
   
}

function LHis() {
  document.getElementById('historic').value="";
  historico = new array();
  
}
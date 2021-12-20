
  function calcularOperacao(banana){
  console.log(banana);
   let valor1 = document.getElementById('valor1').value;
  let valor2 = document.getElementById('valor2').value;
  valor1=parseInt(valor1);
  valor2=parseInt(valor2);
  let resultado=0;
  let sinal='';
 if(banana=="divisao"){
   sinal = "/"
   resultado=valor1/valor2;
 }
  if(banana=="potencia"){
    sinal = "**"
   resultado=valor1**valor2;
 }
  if(banana=="multiplicacao"){
    sinal = "*"
   resultado=valor1*valor2;
 } 
  if(banana=="raiz"){
    sinal = " raiz de "
   resultado= Math.sqrt(valor1) }
  
  if(banana=="subtrair"){
    sinal = "-"
   resultado=valor1-valor2;
 }
  if(banana=="somar"){
    sinal = "+"
    resultado=valor1+valor2;
    }
  document.getElementById("Resultado1").value= resultado;
  historico.push(valor1+sinal+valor2+"="+resultado);
  }

 
function trocar(){  
 let inputTroca1 = document.getElementById("valor1").value;
 let inputTroca2 = document.getElementById("valor2").value;

  document.getElementById("valor1").value=inputTroca2;
  document.getElementById("valor2").value=inputTroca1;
  
}
function limpar(){
let inputReset1 = ( document.getElementById("valor1").value="");  
 let inputReset2 = ( document.getElementById("valor2").value="");
 let inputReset3 = (document.getElementById("Resultado1").value="");
}

var historico=[]


function verHistorico(){
  document.getElementById("historico").value="não soube calcular de cabeça: \n"+historico}
  
  
  //document.getElementById("Resultado1").value= histórico;
    //var ultimo= historico.pop();
  //document.getElementById("Resultado1").value = ultimo;
  //alert("não soube calcular de cabeça: \n"+ ultimo);
  


function insert(num)
{
 let numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
document.getElementById('resultado').innerHTML = "";  
}
function back()
{
  let resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){ 

  var resultado = document.getElementById('resultado').innerHTML;
   if(resultado)
   {
      document.getElementById('resultado').innerHTML = eval(resultado); 
    historico.push(resultado + "=" + eval(resultado))
  }
   }
  

var historico=[]

function verHistorico(){
  document.getElementById("historico").value="Seu histórico :\n"+historico}






  
 
 
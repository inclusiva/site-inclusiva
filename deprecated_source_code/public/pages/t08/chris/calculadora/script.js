///var selecao = boolean(document.getElementById('selecao'));
/// if (selecao == true && resultado < 0){
  // document.getElementById('resultado').value = 0;///
   ///
// }////
 


var lista = document.getElementsByClassName('entradas');

var resultadoTela = document.getElementById('resultado');

var historico = [];

function operacoes(sinal){
  
  var inp1 = parseInt(lista[0].value);
  var inp2 = parseInt(lista[1].value);
  
 var naturais = Boolean(document.getElementById('selecao').checked);
 var result;
  
  switch(sinal){
    case '+':
      result = adicao(inp1,inp2);
      break;
      
    case '-':
      result = subtracao(inp1,inp2);
      break;
    case '*':
      result = multiplicacao(inp1,inp2);
      break;
      
    case '/':
      result = divisao(inp1,inp2);
      break;  
    default:
      alert('escolha alguma operação');
    }
  
   if (naturais == true && result < 0 ){
    resultadoTela.innerText = 0 ;
  } else {
    resultadoTela.innerText = 'o resultado é: ' + result;
  }
   console.log(result);
   salvarResultado(result);
  } 



function adicao(inp1,inp2){
 return inp1 + inp2;
  
 
}

function subtracao(inp1,inp2){
 return inp1 - inp2;
}

function multiplicacao(inp1,inp2){
  return inp1 * inp2;
}

function divisao(inp1,inp2){
  if (inp2 == 0){
    alert ('o segundo algarismo não pode ser 0')   
    }
  return inp1 / inp2;
}

function salvarResultado(result){
  historico.push(result);
}

function verhistorico(){
  var textohistorico = "";
   for(var i = 0; i < historico.lenght; i++){
      textohistorico = textohistorico + " "+ historico [i];
      console.log(historico[i])
   }
 document.getElementById("comparador").value = textohistorico;
  
}  
 

function limpar(){
   document.getElementById("comparador").value = " ";
  historico = new array ();
}

function zerar(){
    document.getElementById('inp1').value='0';
    document.getElementById('inp2').value='0';
    document.getElementById('resultado').value='0';
}

function anterior(){
  var ultimo = historico.pop();
  document.getElementById ("comparador").value = ultimo;
  
  if (ultimo == undefined){
    document.getElementById("comparador").value = "sem anterior";
  }
  
}


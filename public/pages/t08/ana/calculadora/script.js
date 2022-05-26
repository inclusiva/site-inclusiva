
  var resultadoCalculo = document.getElementById('resultado');
  var historicos = [];
 

function operaçoes(sinal){ 
  var lista =  document.getElementsByClassName('entradas');

  var caixa1 = parseInt(lista[0].value);
  var caixa2 = parseInt(lista[1].value);

  var naturais = Boolean(document.getElementById('selecionar').checked);
  var resultado;
  
  if (sinal == '+'){
    resultado = somar(caixa1,caixa2);
    resultadoCalculo.innerText = 'Resultado da soma: ' + resultado;
  } else if (sinal == '-'){
    resultado = subtrair(caixa1,caixa2);
    resultadoCalculo.innerText = 'Resultado da subtração: ' + resultado;
  } else if (sinal == '*'){
    resultado = multiplicaçao(caixa1,caixa2);
    resultadoCalculo.innerText = 'Resultado da multiplicação: ' + resultado;
  } else if (sinal == '/'){
    resultado = divisao(caixa1,caixa2); 
    resultadoCalculo.innerText = 'Resultado da divisão: ' + resultado;
  } else {
    alert('Escolha uma operação!')
  } 
  
  if(naturais == true && resultado < 0){
    resultadoCalculo.innerText = 'Trabalhamos apenas com números naturais!';
  } else if (resultado == 'Infinity'){
    resultadoCalculo.innerText = ' ';
  }
  
  salvarResultado(resultado);
}


function somar(caixa1,caixa2){
  return caixa1 + caixa2;
}


function subtrair(caixa1,caixa2){
  return caixa1 - caixa2;
  
  if(resultado < 0 && selecionar == true){
  resultado = 0;
    } 
  }


function multiplicaçao(caixa1,caixa2){
  var resultado = 0;

  for (var i=0; i < caixa2; i++){
   resultado = resultado + caixa1;
    }
    return resultado;
 }


function divisao(caixa1,caixa2){
  
  if (caixa2 == 0){
    alert('Não pode dividir por 0, escolha outro número!')
  } 
    return caixa1 / caixa2;
}


function limpar(){
  document.getElementById('caixaUm').value = '';
  document.getElementById('caixaDois').value = '';
  document.getElementById('resultado').value = ' ';
}



function salvarResultado(resultado){
  historicos.push(resultado);
}


function anterior(){
  var ultimo = historicos.pop();
  document.getElementById("historicos").value = ultimo;
  
  if (ultimo == undefined){
    document.getElementById("historicos").value = 'Não há resultado anterior.'
  }
}


function historico(){
  var historico = "";
    for(var i = 0; i < historicos.length; i++){
      historico = historico + " " + historicos[i];
      console.log(historicos[i])
    }
  
  document.getElementById("historicos").value = historico;
}


function limparHistorico(){
  document.getElementById("historicos").value = "";
  historicos = new array();
}





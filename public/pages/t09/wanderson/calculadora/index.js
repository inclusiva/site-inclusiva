//Nova calculadora

var historico = []
var listaNumeros = []
var listaOperacoes = []
var numeroCorrente = '';

function atualizaNumeroCorrente(numeroStr) {
    numeroCorrente = numeroCorrente + numeroStr;

}

function alteraFonte(texto) {
    if(document.getElementById('display').innerHTML.length == 27){
        document.getElementById('display').style.fontSize = '25px'
    }
    if(document.getElementById('display').innerHTML.length < 27){
        document.getElementById('display').style.fontSize = '35px'
    }
}

function atualizaDisplay(texto){
    var textoDoDisplay = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = textoDoDisplay + texto;

    alteraFonte()
}

function converteNumeroCorrente() {
    var numeroDisplay = Number(numeroCorrente);
    numeroCorrente = '';
    listaNumeros.push(numeroDisplay);
}

function inserirNumeros(numero)  {
    atualizaDisplay(numero);

    atualizaNumeroCorrente(numero);
    console.log(numero)
}

function inserirOperacoes (operacao) {
    atualizaDisplay(operacao);
    converteNumeroCorrente();

    listaOperacoes.push(operacao)
    console.log(operacao)
}

function aplicaOperacoes (listaOperacoes, listaNumeros) {
    converteNumeroCorrente();
    console.log(listaOperacoes);
    console.log(listaNumeros);
    var resultadoFinal ;
    var proximoNumero;
    var operacao;
    
    if(resultadoFinal == undefined) {
        resultadoFinal = listaNumeros[0]
    }

    for(i=0; i< listaOperacoes['length']; i++) {    
        proximoNumero = listaNumeros[i+1]; 
        operacao = listaOperacoes[i];
        //console.log(proximoNumero)
            if(operacao == '+') {
                resultadoFinal = resultadoFinal + proximoNumero;
            }
            if(operacao == '-') {
                resultadoFinal = resultadoFinal - proximoNumero;
            }
            if(operacao == 'x') {
                resultadoFinal = resultadoFinal * proximoNumero;
            }
            if(operacao == '÷') {
                resultadoFinal = resultadoFinal / proximoNumero;
            }
            if(operacao == 'ˆ') {
                resultadoFinal = Math.pow(resultadoFinal, proximoNumero);
            }
            if(operacao == '√') {
                resultadoFinal = Math.sqrt(resultadoFinal);
            }
            if(operacao == '%') {
                resultadoFinal = (resultadoFinal * 100) / resultadoFinal;
            }

    }
    return resultadoFinal;
}

function calcula() {
    var resultado = aplicaOperacoes(listaOperacoes,listaNumeros);
    document.getElementById('display').innerHTML = resultado;

    historico.push(resultado)

    numeroCorrente = resultado;
    listaNumeros = [];
    listaOperacoes = [];
};


function limpar() {
    document.getElementById('display').innerHTML = "";
    resultadoFinal = '';
    proximoNumero = '';
    listaOperacoes = [];
    listaNumeros = [];
    numeroCorrente = '';
}

function salvarNoHistorico(result) {
    historico.push(result)
    document.getElementById('historico').innerHTML = historico;
}

function limparHistorico() {
    historico = [];
    document.getElementById('historico').innerHTML = '';
}



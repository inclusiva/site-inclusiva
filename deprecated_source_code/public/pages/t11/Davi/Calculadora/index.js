var historico = []

const historicol = () => {
    var resultado
    for (i = 0; i < historico.length; i++) {
        resultado = historico[i];
        confirm(resultado);
    }
}


const soma = () => {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado = parseInt(valor1) + parseInt(valor2);
    historico.push(valor1 + '+' + valor2 + ' = ' + resultado)
    alert(resultado)
}

const subtração = () => {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado = valor1 - valor2
    historico.push(valor1 + '-' + valor2 + ' = ' + resultado)
    alert(resultado)
}

const multiplicação = () => {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado = valor1 * valor2
    historico.push(valor1 + ' x ' + valor2 + ' = ' + resultado)
    alert(resultado)
}

const divisão = () => {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado = valor1 / valor2
    historico.push(valor1 + ' : ' + valor2 + ' = ' + resultado)
    alert(resultado)
}

const umADez = () => {
    for (var i = 1; i <= 10; i++) {
        console.log(i)
    }

}

const dezAUm = () => {
    for (var i = 10; i >= 1; i--) {
        console.log(i)
    }

}

const futa = () => {
    var frutas = ["banana", "maçã", "melancia"]
    for (i = 0; i <= frutas.length; i++) {
        if (frutas.includes("melancia")) {
            console.log("exixte melancia")
        } else {
            console.log("não exixte melancia")
        }
    }
}

const numeroz = () => {
    const numeros = [43, 12, 34, 65, 21, 1]
    var maior = Math.max(...numeros);
    var menor = Math.min(...numeros);
    for (i = 0; i <= numeros.length; i++) {

    }
    console.log(menor, maior)

}
const compras = () => {
    const lista = [
        { nome: 'sabão' },
        { nome: 'tabua' },
        { nome: 'batata' },
        { nome: 'lula' },
        { nome: 'cebola' },
        { nome: 'pala' },
        { nome: 'botas' },
        { nome: 'Cabelo' },
    ]
    for (i = 0; i < lista.length; i++)
        console.log(lista[i].nome)
}

const pareses = () => {
    let numerosPares = [];
    for (i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
        var sum = numerosPares.sum();
        console.log(sum)
    }

}






const historico = [];

function historicos() {
    for (let i = 0; i < historico.length; i++) {

        alert(historico[i]);
    }
}

function insert(num) {
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.slice(0, -1);
}

function calcular() {
    const resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        var historicy = document.getElementById('resultado').innerHTML = eval(resultado);
        historico.push(historicy)
    } else {
        document.getElementById('resultado').innerHTML = "vazio";
    }

}

function umAoDez() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function dezAUm() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

function fruta() {
    const frutas = ["banana", "maçã", "melancia"];
    if (frutas.includes("melancia")) {
        console.log("melancia existe na lista");
    } else {
        console.log("melancia não existe na lista");
    }
}

function encontrarMaiorMenor(array) {
    if (array.length === 0) {
        console.log("O array está vazio.");
        return;
    }

    let maior = array[0];
    let menor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
        if (array[i] < menor) {
            menor = array[i];
        }
    }

    console.log(`Maior número: ${maior}`);
    console.log(`Menor número: ${menor}`);
}

// Exemplo de uso:
const numeros = [5, 2, 9, 1, 7, 4];
encontrarMaiorMenor(numeros);

const listaDeCompras = ["Frango", "Bananas", "Leite", "Pão", "Ovos", "Arroz", "Feijão", "Carne"];

console.log("Lista de Compras:");

for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(`${i + 1}. ${listaDeCompras[i]}`);
}

let soma = 0;

for (let i = 2; i <= 20; i += 2) {
    soma += i;
}

console.log(`A soma dos números pares de 1 a 20 é: ${soma}`);

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function primos(array) {
    array.forEach((num) => {
        console.log(`${num} ${isPrime(num) ? 'É primo!' : 'Não é primo!'}`);
    });
}

const numerosPrimos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
primos(numerosPrimos);


function matematica() {
    const nota = parseInt(prompt("Notas:"));

    switch (nota) {
        case 90:
            console.log("Você tirou A");
            break;
        case 80:
            console.log("Você tirou B");
            break;
        case 70:
            console.log("Você tirou C");
            break;
        case 60:
            console.log("Você tirou D");
            break;
        default:
            console.log("Você tirou F");
    }
}


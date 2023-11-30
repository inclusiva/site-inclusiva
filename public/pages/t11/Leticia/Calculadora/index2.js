const numero = () => {
    for (var i = 1; i <= 10; i++) {
        console.log(i)
    }
}
numero()
const decrescente = () => {
    for (var i = 10; i >= 10; i++) {
        console.log(i)
    }
}
const fruta = () => {
    var listaDeFrutas = ["banana,morango,melancia"];
    for (var i = 0; i <= listaDeFrutas.length; i++) {
        if (listaDeFrutas.includes("melancia")) {
            console.log("Existe melancia na lista")
        } else {
            console.log("Melancia não existe na lista")
        }

    }
}
fruta()
const exercicio4 = () => {
    var numerosInteiros = [-1, -2, -3, 0, 1, 2, 3];
    var numeroMaior = Math.max(...numerosInteiros)
    var numeroMenor = Math.min(...numerosInteiros)
    console.log(numeroMaior)
    console.log(numeroMenor)
}
exercicio4()
const listaDeCompras = () => {
    var comprasDeLegumes = ["batata", "abobora", "xuxu", "berinjela", "cenoura", "brocolis", "milho", "abobora"];
    for (var i = 0; i <= comprasDeLegumes.length; i++) {
        console.log(comprasDeLegumes)
    }
}
listaDeCompras()

const somaPares0A20 = () => {
    var soma = 0;
    for (var i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            soma += i;

        }
        console.log(soma);
    }

}
somaPares0A20()
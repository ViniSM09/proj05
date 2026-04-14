let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
let regiao = prompt("Região:\n1 - Sul\n2 - Sudeste\n3 - Outras");

let frete = 0;

if (valorCompra > 250) {
    frete = 0;
} else {
    if (regiao == "1") {
        frete = 20;
    } else if (regiao == "2") {
        frete = 10;
    } else {
        frete = 30;
    }
}

let total = valorCompra + frete;

alert("Frete: R$ " + frete.toFixed(2));
alert("Total: R$ " + total.toFixed(2));
let valorCarro = parseFloat(prompt("Digite o valor do carro:"));
let opcao = prompt("Forma de pagamento:\n1 - PIX\n2 - Cartão\n3 - Financiamento");

let valorFinal = 0;
let parcelas = 1;

if (opcao == "1") {
    valorFinal = valorCarro * 0.85;
    alert("Pagamento via PIX (15% desconto)");
} else if (opcao == "2") {
    valorFinal = valorCarro * 1.05;
    parcelas = parseInt(prompt("Em quantas parcelas (até 24x)?"));
} else if (opcao == "3") {
    valorFinal = valorCarro * 1.20;
    parcelas = parseInt(prompt("Em quantas parcelas (até 48x)?"));
}

alert("Valor final: R$ " + valorFinal.toFixed(2));
if (parcelas > 1) {
    alert("Valor da parcela: R$ " + (valorFinal / parcelas).toFixed(2));
}
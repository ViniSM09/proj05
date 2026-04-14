let valor = Number(prompt("Insira o valor: R$"));
let brinde = "Nenhum";

if (valor >= 50.00) {
    let cartao = prompt("Você possui o cartão de fidelidade? (Sim/Não):").trim().toLowerCase();

    if (cartaoFidelidade === "sim") {
        valorPedido -= valorPedido * 0.10;
    } else {
        brinde = "Cookie";
    }
}

console.log(`Valor total a pagar: R$ ${valorPedido.toFixed(2)}`);
console.log(`Brinde ganho: ${brinde}`);
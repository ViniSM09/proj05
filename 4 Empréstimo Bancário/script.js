let salario = parseFloat(prompt("Digite seu salário:"));
let parcela = parseFloat(prompt("Digite o valor da parcela desejada:"));

if (parcela > salario * 0.30) {
    alert("Empréstimo Negado: Parcela muito alta");
} else {
    alert("Empréstimo Pré-aprovado");
}
// Entrada de dados
let salarioBruto = parseFloat(prompt("Digite seu salário bruto mensal:"));

// Variáveis
let imposto = 0;
let aliquota = 0;

// Processamento
if (salarioBruto <= 2112) {
    aliquota = 0;
} else if (salarioBruto <= 2826.65) {
    aliquota = 0.075;
} else if (salarioBruto <= 3751.05) {
    aliquota = 0.15;
} else {
    aliquota = 0.225;
}

// Cálculo do imposto
imposto = salarioBruto * aliquota;

// Salário líquido
let salarioLiquido = salarioBruto - imposto;

// Saída
alert("Salário Bruto: R$ " + salarioBruto.toFixed(2));
alert("Imposto de Renda: R$ " + imposto.toFixed(2));
alert("Salário Líquido: R$ " + salarioLiquido.toFixed(2));
let idade = parseInt(prompt("Digite sua idade:"));
let estudante = prompt("Você é estudante? (sim/não)");

let valorIngresso = 40;

if (idade < 12 || idade > 60 || estudante.toLowerCase() === "sim") {
    valorIngresso = 20;
}

alert("Valor do ingresso: R$ " + valorIngresso.toFixed(2));
/*
Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32),
ler um valor de temperatura em Fahrenheit e exibi-lo em Celsius.
*/

const teclado = require("prompt-sync")();

let f, c;

f = Number(teclado("Digite a temperatura F°: "));

c = ((f - 32) / (9 / 5));

console.log("F°", f, "equivalem a C°", c);
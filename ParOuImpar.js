const teclado = require("prompt-sync")();

let numero, resto;

numero = Number(teclado("Digite um número: "))
resto = numero % 2
    if(resto === 0){
        console.log("O número", numero, "é PAR!")
    }else{
        console.log("O número", numero, "é ÍMPAR!")
    }
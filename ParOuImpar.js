const teclado = require("prompt-sync")();

let operacao;

do{
    let numero, resto;
    numero = Number(teclado("Digite um número: "))
    resto = numero % 2
        if(resto === 0){
            console.log("O número", numero, "é PAR!")
        }else{
            console.log("O número", numero, "é ÍMPAR!")
        }

    operacao = teclado("Deseja verificar outro número: s/n ")
}while(operacao === "s")
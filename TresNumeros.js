const teclado = require("prompt-sync")();

let n1, n2, n3;
n1 = Number(teclado("Digite um número: "));
n2 = Number(teclado("Digite um número: "));
n3 = Number(teclado("Digite um número: "));
    if(n1 > n2 && n1 > n3){
        console.log("O número", n1, "é maior que os números", n2, "e", n3);
    }
    else if(n2 > n1 && n2 > n3){
        console.log("O número", n2, "é maior que os números", n1, "e", n3);
    }
    else{
        console.log("O número", n3, "é maior que os números", n1, "e", n2);
    }
/*
Escreva um programa que dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro; 
É dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo; 
E, dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma; 
E, dado os três lados de um triângulo determinar o perímetro do mesmo. 
Utilize um Menu de opções.
*/

const teclado = require("prompt-sync")();

let opcao, base, altura, tamLado, tamLado2, tamLado3, tamRaio, area, perimetro;

console.log("\n1- Área e perímetro de um Retangulo\n2- Área e perímetro de um Quadrado\n3- Área e Perímetro de uma Circunferência\n4- Perímetro de um Triângulo\n");
opcao = Number(teclado("Selecione uma opção: "));
switch(opcao){
    case 1:
        base = Number(teclado("Digite o tamanho da base do retângulo: "));
        altura = Number(teclado("Digite o tamanho da altura do retângulo: "));
        
        area = base * altura
        perimetro = (2 * (base + altura));
        console.log("A área deste retângulo é", area);
        console.log("O perímetro deste retângulo é", perimetro, "\n")
        break;

    case 2:
        tamLado = Number(teclado("Digite o tamanho do lado do Quadrado: "));

        area = tamLado ** 2
        perimetro = tamLado * 4
        console.log("A área deste quadrado é", area);
        console.log("O perímetro deste quadrado é", perimetro, "\n");
        break;

    case 3: 
        tamRaio = Number(teclado("Digite o tamanho do Raio de uma circunferência: "));

        area = 3.14 * (tamRaio ** 2);
        perimetro = 2 * 3.14 * tamRaio

        console.log("A área desta Circunferência é", area);
        console.log("O perímetro desta Circunferência é", perimetro, "\n");
        break;
    
    case 4:
        tamLado = Number(teclado("Digite o tamanho do primeiro lado: "));
        tamLado2 = Number(teclado("Digite o tamanho do segundo lado: "));
        tamLado3 = Number(teclado("Digite o tamanho do terceiro lado: "));

        perimetro = tamLado + tamLado2 + tamLado3

        console.log("O perímetro deste Triângulo é", perimetro, "\n");
        break;
    
    default:
        console.log("\nOpção inválida, execute o programa novamente!\n")
}
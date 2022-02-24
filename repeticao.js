console.log("=== REPETICAO ===");

// Números - 1 à 10
document.write("<h3>Números - 1 à 10</h3>");
var inicial = 1; // valor inicial
var final = 10; // valor inicial

while (inicial <= final) { // condicao logico
  document.write(inicial); // 1
  // inicial = inicial + 1; // incremento
  // inicial += 1; // incremento
  inicial++; // incremento
}

document.write("<hr>");

// Números - 50 à 1
document.write("<h3>Números - 50 à 1</h3>");
var inicial = 50;
var final = 1;

while (inicial >= final) {
  document.write(inicial, " ");
  inicial -= 1; // decremento
}

document.write("<hr>");

// Números Pares - 0 à 100
document.write("<h3>Números Pares - 0 à 100</h3>");
let ini = 0;
let fim = 100;

while (ini <= fim) {
  document.write(ini, " ");
  ini += 2;
}

document.write("<hr>");

// Números Impares - 99 à 1
// 99 - 97 - 95 ... 3 - 1
document.write("<h3>Números Impares - 99 à 1</h3>");
var inicial = 99;
var final = 1;

while (inicial >= final) {
  if (inicial == 99) {
    document.write(inicial);
  } else {
    document.write(" - ", inicial);
  }
  inicial -= 2;
}

document.write("<hr>");

// DESAFIO: criar um programa que receba números
// DICA: use o prompt()
// Rodar o programa infinitamente, recebendo
// e mostrando os números digitados
// Quando o número inserido for ZERO (0),
// encerrar o programa!

/*let loop = true;
let num;

while (loop) {
  num = prompt("Digite um número:");
  console.log(num);

  if (num == 0) {
    console.log("Fim!");
    loop = false;
  }
}*/

// FOR

// Números - 1 à 10
document.write("<h3>Números - 1 à 10 - FOR</h3>");
// Sintaxe
// for (valor_inicial; condicao_logica; incremento) {
// }

for (let cont = 1; cont <= 10; cont++) {
  document.write(cont, " ");
}

document.write("<hr>");

// DESAFIO: solicite ao usuário um número e imprima a quantidade de asteriscos na tela referente ao número informado

const quant = 10;

for(let index=0; index < quant; index++) {
  document.write("* ");
}

// DESAFIO - 1

// **********
// **********
// **********
// **********
// **********

document.write("<hr>");

for(let lin=0; lin < 5; lin++) {

  for(let col=0; col < 10; col++) {
    document.write("*");
  }

  document.write("<br>");

}

document.write("<hr>");

// DESAFIO 2

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

for(let i=1; i <= 10; i++) {

  for(let x=0; x < i; x++) {
    document.write("*");
  }
  
  document.write("<br>");
}

document.write("<hr>");

// DESAFIO - PARA CASA

// *=================*
//  *===============*
//   *=============*
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *

document.write("D&nbsp;E&nbsp;S&nbsp;A&nbsp;F&nbsp;I&nbsp;O");








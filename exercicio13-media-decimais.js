/*
===========================================================
Exercício 13 - Calcula a média de números decimais
digitados pelo usuário até que ele digite 0
Duas versões abaixo:
1. Simulação com números em array
2. Entrada interativa usando while e prompt-sync
===========================================================
*/

// ======= Versão 1: Simulação com números definidos =======
// let numeros = [4.5, 7.8, 10.0, 0]; // o 0 serve para indicar fim
// let soma = 0;
// let contador = 0;

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] !== 0) {
//     soma += numeros[i];
//     contador++;
//   }
// }

// let media = soma / contador;
// console.log("Média:", media.toFixed(2));

// ======= Versão 2: Usuário digita até digitar 0 =======
// const prompt = require('prompt-sync')();

// let soma = 0;
// let contador = 0;
// let numero;

// do {
//   numero = Number(prompt("Digite um número decimal (0 para sair): "));
//   if (numero !== 0) {
//     soma += numero;
//     contador++;
//   }
// } while (numero !== 0);

// if (contador > 0) {
//   let media = soma / contador;
//   console.log("Média dos números digitados:", media.toFixed(2));
// } else {
//   console.log("Nenhum número válido foi digitado.");
// }

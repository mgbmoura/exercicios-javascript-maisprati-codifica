/*
===========================================================
Exercício 06 - Verifica se três lados formam um triângulo
e determina seu tipo: Equilátero, Isósceles ou Escaleno
Duas versões abaixo:
1. Com os lados definidos no código
2. Com entrada do usuário usando prompt-sync
===========================================================
*/

// ======= Versão 1: Lados definidos no código =======
// let A = 5;
// let B = 5;
// let C = 5;

// if (A < B + C && B < A + C && C < A + B) {
//   if (A === B && B === C) {
//     console.log("Triângulo Equilátero");
//   } else if (A === B || A === C || B === C) {
//     console.log("Triângulo Isósceles");
//   } else {
//     console.log("Triângulo Escaleno");
//   }
// } else {
//   console.log("Os lados fornecidos NÃO formam um triângulo");
// }

// ======= Versão 2: Usuário digita os lados =======
// const prompt = require('prompt-sync')();

// let A = Number(prompt("Digite o lado A: "));
// let B = Number(prompt("Digite o lado B: "));
// let C = Number(prompt("Digite o lado C: "));

// if (A < B + C && B < A + C && C < A + B) {
//   if (A === B && B === C) {
//     console.log("Triângulo Equilátero");
//   } else if (A === B || A === C || B === C) {
//     console.log("Triângulo Isósceles");
//   } else {
//     console.log("Triângulo Escaleno");
//   }
// } else {
//   console.log("Os lados fornecidos NÃO formam um triângulo");
// }

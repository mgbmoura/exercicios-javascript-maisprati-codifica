/*
===========================================================
Exercício 15 - Gera os primeiros 10 números da sequência de Fibonacci
Duas versões abaixo:
1. Geração fixa de 10 termos
2. Número de termos definido pelo usuário com prompt-sync
===========================================================
*/

// ======= Versão 1: Geração fixa dos 10 primeiros termos =======
// let penultimo = 0;
// let ultimo = 1;

// console.log(penultimo);
// console.log(ultimo);

// for (let i = 3; i <= 10; i++) {
//   let atual = penultimo + ultimo;
//   console.log(atual);
//   penultimo = ultimo;
//   ultimo = atual;
// }

// ======= Versão 2: Número de termos fornecido pelo usuário =======
// const prompt = require('prompt-sync')();

// let n = Number(prompt("Quantos termos da sequência de Fibonacci você quer ver? "));

// let penultimo = 0;
// let ultimo = 1;

// if (n >= 1) console.log(penultimo);
// if (n >= 2) console.log(ultimo);

// for (let i = 3; i <= n; i++) {
//   let atual = penultimo + ultimo;
//   console.log(atual);
//   penultimo = ultimo;
//   ultimo = atual;
// }

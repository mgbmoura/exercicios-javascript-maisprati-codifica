/*
===========================================================
Exercício 05 - Cálculo do IMC (Índice de Massa Corporal)
e classificação em: Baixo peso, Peso normal, Sobrepeso ou Obesidade
Duas versões abaixo:
1. Versão com peso e altura definidos no código
2. Versão que pede os dados ao usuário (com prompt-sync)
===========================================================
*/

// ======= Versão 1: Dados definidos no código =======
// let peso = 75;     // em kg
// let altura = 1.75; // em metros

// let imc = peso / (altura * altura);

// if (imc < 18.5) {
//   console.log("Baixo peso");
// } else if (imc < 25) {
//   console.log("Peso normal");
// } else if (imc < 30) {
//   console.log("Sobrepeso");
// } else {
//   console.log("Obesidade");
// }

// ======= Versão 2: Usuário digita os dados no terminal =======
// const prompt = require('prompt-sync')();

// let peso = Number(prompt("Digite seu peso (em kg): "));
// let altura = Number(prompt("Digite sua altura (em metros): "));

// let imc = peso / (altura * altura);

// console.log("Seu IMC é:", imc.toFixed(2));

// if (imc < 18.5) {
//   console.log("Classificação: Baixo peso");
// } else if (imc < 25) {
//   console.log("Classificação: Peso normal");
// } else if (imc < 30) {
//   console.log("Classificação: Sobrepeso");
// } else {
//   console.log("Classificação: Obesidade");
// }

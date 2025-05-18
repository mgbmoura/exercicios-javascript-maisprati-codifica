/*
===========================================================
Exercício 04 - Menu interativo com 3 opções usando switch-case
Duas versões abaixo:
1. Versão com opção já definida no código
2. Versão que pede a escolha do usuário (com prompt-sync)
===========================================================
*/

// ======= Versão 1: Opção definida diretamente no código =======
// let opcao = 2; // Altere esse valor para testar as opções

// switch (opcao) {
//   case 1:
//     console.log("Bem-vindo ao programa!");
//     break;
//   case 2:
//     let numero = 5; // número fixo para exemplo
//     console.log("O dobro de", numero, "é", numero * 2);
//     break;
//   case 3:
//     console.log("Saindo do programa...");
//     break;
//   default:
//     console.log("Opção inválida. Tente novamente.");
//     break;
// }

// ======= Versão 2: Usuário escolhe a opção no terminal =======
// const prompt = require('prompt-sync')();

// let opcao = Number(prompt("Escolha uma opção:\n1 - Mensagem de boas-vindas\n2 - Calcular o dobro\n3 - Sair\nDigite sua opção: "));

// switch (opcao) {
//   case 1:
//     console.log("Bem-vindo ao programa!");
//     break;
//   case 2:
//     let numero = Number(prompt("Digite um número: "));
//     console.log("O dobro de", numero, "é", numero * 2);
//     break;
//   case 3:
//     console.log("Saindo do programa...");
//     break;
//   default:
//     console.log("Opção inválida. Tente novamente.");
//     break;
// }

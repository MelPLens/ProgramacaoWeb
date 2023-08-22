//Escreva um programa que imprima os números de 1 a 10 no console usando um loop. Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. Observação: após o número 10 não pode ter um traço.
// funcao com a variavel let com a funcao numeros usando loop
let numeros = "";
for (let i = 1; i <= 10; i++) {
  numeros += i;
  if (i !== 10) {
    numeros += " - ";
  }
}
console.log(numeros);
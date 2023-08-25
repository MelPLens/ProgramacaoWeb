//Escreva uma função que recebe um vetor de números inteiros e mostre como
//resultado qual é o menor e qual é o maior número.(Utilizar arrow function).
const encontrarMenorEMaior = numeros => {
    const menor = Math.min(...numeros);
    const maior = Math.max(...numeros);
    return { menor, maior };
  };
  
  const vetorNumeros = [5, 2, 8, 1, 10];
  const resultados = encontrarMenorEMaior(vetorNumeros);
  console.log("Menor:", resultados.menor); // 1
  console.log("Maior:", resultados.maior); // 10
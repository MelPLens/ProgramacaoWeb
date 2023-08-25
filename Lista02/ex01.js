//Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus
//lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais.
//Escaleno: Todos os lados são diferentes. Crie uma função que recebe os
//comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados (Utilizar arrow function).
const classificarTriangulo = (lado1, lado2, lado3) => {
    if (lado1 === lado2 && lado2 === lado3) {
      return "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  };
  
  console.log(classificarTriangulo(3, 3, 3)); // Equilátero
  console.log(classificarTriangulo(3, 4, 3)); // Isósceles
  console.log(classificarTriangulo(2, 4, 6)); // Escaleno
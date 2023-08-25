//Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes nessa string. 
//Considere apenas vogais minúsculas (a, e, i, o, u).
function contarVogais(str) {
    const vogais = "aeiou";
    let count = 0;
    for (let char of str) {
      if (vogais.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  console.log(contarVogais("Mel Plens"));
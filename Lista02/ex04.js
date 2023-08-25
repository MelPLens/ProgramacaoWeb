//Crie uma função que verifica se um número inteiro passado como parâmetro é
//divisível por 3 e retorne true ou false.(Utilizar arrow function).
const divisivelPor3 = numero => {
    return numero % 3 === 0;
  };
  
  console.log(divisivelPor3(9)); // true
  console.log(divisivelPor3(7)); // false
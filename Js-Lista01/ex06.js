//Faça uma função que mostre o dobro do número passado. 
//Caso o número seja menor ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que zero”.

function dobroNumero(numero) {
  if (numero <= 0) {
    return "Só é aceito números positivos maiores que zero";
  }
  return numero * 2;
}

console.log(dobroNumero(5));
console.log(dobroNumero(-2));
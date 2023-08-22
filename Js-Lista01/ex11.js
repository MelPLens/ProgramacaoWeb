//Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'.

function validarEmail(email) {
  return email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".");
}

console.log(validarEmail("user@example.com"));
console.log(validarEmail("invalid.email"));
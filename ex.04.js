//Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br
const nome = "Edson Martin Feitosa";
const partesDoNome = nome.toLowerCase().split(" ");
const primeiroNome = partesDoNome[0];
const ultimoNome = partesDoNome[partesDoNome.length - 1];

const email = `${primeiroNome}.${ultimoNome}@facens.br`;
console.log(email);
console.log(nome.charAt(3)) 
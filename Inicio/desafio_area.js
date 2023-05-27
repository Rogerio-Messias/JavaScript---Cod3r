// PI * raio * raio
// Em JavaScript existe a convenção de se utilizar letras maiusculas para definir o nome de constantes como por exemplo é o caso de "PI" que é uma constante matemática

// Neste desafio devemos escrever um script que calcule e apresente o valor da área de uma circunferência

let raio = 10;
const PI = 3.141592;
let area = PI * (raio * raio);
console.log("Esta é a área da circunferência: " + area + " M2");

// Também podemos utilizar o valor do PI fornecido pelo JavaScript através da função "Math.PI" que possui uma precisam maior do que nós definimos

console.log(Math.PI);

area = Math.PI * raio * raio;
console.log("o valor da área é " + area + "m2.");
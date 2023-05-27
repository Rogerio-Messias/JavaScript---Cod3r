// O objetivo do desafio é efetuar a troca dos valores entre as duas váriaveis abaixo

let a = 7;
let b = 94;

console.log("Este é o valor da variável a antes da troca: " + a);
console.log("Este é o valor da variável b antes da troca: " + b);

let temp = a;
a = b;
b = temp;

console.log("Este é o valor da variável a depois da troca: " + a);
console.log("Este é o valor da variável b depois da troca: " + b);


// esta é uma outra forma de fazer a mesma coisa utilizando um recurso do JavaScript

[a,b]  = [b,a]
console.log("Este é o valor da variável a depois da troca utilizando o recurso do JavaScript: " + a);
console.log("Este é o valor da variável b depois da troca utilizando o recurso do JavaScript: " + b);
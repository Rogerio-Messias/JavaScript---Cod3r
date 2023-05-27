let a = 3;


a= a + 10; // o valor da variavel esta sendo alterado após a definição no inicio do script
console.log("Este é o valor da variavel 'a': " + a);

const b = 10; // Utilizamos a o termo reservado "const" para definir um valor constante para uma variavel de forma que ele seja IMUTAVEL ao longo do script

console.log("Este é o valor da constante 'b': " + b);

b = b + 10; /* Se tentarmos alterar o valor da variavel "b" teremos um erro pois ela foi definida como constante e poderemos ver na saída 
do console o o erro "TypeError: Assignment to constant variable" */


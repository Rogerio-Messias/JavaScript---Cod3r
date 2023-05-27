var a = 3
let b = 4


var a = 30
// let b = 40
b = 40
/* Percebe que existe uma diferença entre utilizarmos a palavra reservada "var" ou "let" para declararmos variaveis, pois quando utilizamos o "var" a linguagem não reclama
 * se declararmos novamente a mesma variavel, porem quando utilizamos "let" a linguagem nos avisa que a variavel ja foi declarada anteriormente, por isso é uma boa prática
 * utilizarmos o "let"
 * 
 * 
*/
console.log(a, b);

a = 300
b = 400

console.log(a, b);

const c = 5 /*
            * quando utilizamos a palavra reservada "const" sisgnifica que aquela constante declarada não terá ser valor alterado ao longo do script, 
            * e se tentarmos altera-lo irá gerar erro no programa
            * */
//c = 50
console.log(c);

console.log(7 / 0); // qualquer valor dividido por zero em JavaScript retorna um valor infinito, quanto masi perto de Zero maior sera o valor até o infinito
console.log("10" / 2); // neste caso o JavaScript verifica o conteúdo da String e tenta converter para um valor numérico e depois efetua o calculo
console.log("Show!" * 2); // nos casos em que o JavaScript não consegue efetuar a conversão ele retorna que o dado é "NaN" ==> Not a Number

console.log(0.1 + 0.7); /* neste exemplo é possível ver que a precisão do caculo do JavaScript não é de 100%, pois isso demandaria um alto poder de processamento, isto é uma 
especificação usada por várias linguagens esta é uma especificação da IEEE */

//console.log(10.toString()); ==> o método "toString" não pode ser invocado diretamente para um dado expresso de forma literal
console.log((10).toString()); // ==> Mas se colocarmos o dado expresso de forma literal entre parenteses conseguimos invicar o método sem gerar erro
console.log((10.345).toFixed(2)); // o mesmo caso expresso acima ocorre para o método "toFixed"

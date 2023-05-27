const peso1 = 1.0;
const peso_2 = ('2.0'); 

console.log(typeof peso_2); // neste ponto a variavel esta definida como do tipo "String"

const peso2 = Number ('2.0'); //apesar de ter definido o tipo da constante como "Number", passamos um valor do tipo "String", desta forma o dado é convertido para tipo numérico
console.log(typeof peso2);


console.log (peso1, peso2);
console.log(Number.isInteger(peso1)); 
console.log(Number.isInteger(peso2)); // neste ponto validamos se o dado da váriavel é do tipo "Inteiro"

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media =  total / (peso1 + peso2);

console.log(media); 

console.log(media.toFixed(2)); // a metodo "toFixed" serve para definir o maximo de casas decimais de um determinado valor serão exibidas na tela
console.log(media.toString()); // utilizando o método "toString" conseguimos transformar o valor numerico em uma String
console.log(typeof media);
console.log(media.toString(2)); /* utilizando o método "toString" conseguimos transformar o valor numerico em uma String, porém se passarmos como parâmetro o numero "2" 
para o método iremos apresentar o valor anterior só que em formato binário */


console.log(typeof media);
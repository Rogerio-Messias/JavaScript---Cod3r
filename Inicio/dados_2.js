let preco = 19.90;
let desconto = 0.4;

console.log(preco * desconto);

console.log(preco * (1 - desconto)); /* O operador de multiplicação tem prioridade sobre o de subtração, por 
isso neste caso foi colocada a operação de subtração dentro dos parenteses para que ela fosse executada primeiro */

//também podemos definir uma variavel e já utiliza-la direto na operação

let precoComDescontoDobrado = preco * (1.1 * desconto); // <==
console.log(precoComDescontoDobrado);

let nome = "Caderno"; // String (Texoto) -> sequencia de símbolos
let categoria = "Papelaria";
console.log("Produto: " + nome
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Desconto: " + desconto);

    console.log(1 + 1);
    console.log("1" + 1); // como foi visto também podemos concatenar valores do tipo string e do tipo interio dentro da mesma expressão
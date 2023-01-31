let valor; // nao inicializada
console.log(valor);

valor = null; //ausencia de valor
console.log(valor);
//console.log(valor.toString()); // Erro! nao tente acessar algo de uma variavel q esta nulo

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; //evite atribuir undefined,se quiser limpar o valor de uma variavel atribua nulo
console.log(!!produto.preco);
console.log(produto);
//delete produto.preco para deletar um valor de uma variavel
produto.preco = null // sem preco
console.log(!!produto.preco);
console.log(produto);
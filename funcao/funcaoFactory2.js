function criarProduto(nome,preco){
    return{
        produto:nome,
        preco:preco,
        desconto:0.4
     }
}

console.log(criarProduto('Leite',10))
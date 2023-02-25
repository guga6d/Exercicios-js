const produtos = [
    {nome:'Notebook',preco:2499,fragil:true},
    {nome:'iPad Pro',preco:4199,fragil:true},
    {nome:'Copo de vidro',preco:12.99,fragil:true},
    {nome:'Copo de Plastico',preco:18.99,fragil:false}
]
const caro = produto => {
    if(produto.preco >= 500){
        return true
    }
}

const fragil = produto => {
    if(produto.fragil === true){
        return true
    }
}
const resultado = produtos.filter(caro).filter(fragil)

console.log(resultado)

//Resposta do professor abaixo



const caro2 = produto => produto.preco >= 500
const fragil2 = produto => produto.fragil

console.log(produtos.filter(caro2).filter(fragil2))

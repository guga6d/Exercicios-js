Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i =0; i< this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome:'Notebook',preco:2499,fragil:true},
    {nome:'iPad Pro',preco:4199,fragil:true},
    {nome:'Copo de Vidro',preco:12.99,fragil:true},
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
const resultado = produtos.filter2(caro).filter2(fragil)

console.log(resultado)


const caro2 = produto => produto.preco >= 500
const fragil2 = produto => produto.fragil

console.log(produtos.filter2(caro2).filter2(fragil2))
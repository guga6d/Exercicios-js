//usando a notacao literal
const obj1 = {}
console.log(obj1)

//Onject em JS
console.log( typeof Object , typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }  
}

const p1 = new Produto('Caneta',2,0.2)
const p2 = new Produto('Notebook',2000,0.2)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

// funcoes factory
function criarFuncionario(nome,salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30 ) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Igor',4000,4)
const f2 = criarFuncionario('Ricardo',8000,1)
console.log(f1.getSalario(),f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma funcao famosa que retorn um objeto
const fromJSON = JSON.parse('{"info":"Sou JSON"}')
console.log(fromJSON.info)
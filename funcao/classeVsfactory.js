class pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        return console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new pessoa('Ana')
p1.falar()

const criarPessoa = nome =>{
    return {
        falar: () => console.log(`meu nome e ${nome}`)
        
    }
}
const p2 = criarPessoa('Jean')
p2.falar()
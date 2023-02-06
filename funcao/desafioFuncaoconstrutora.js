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

function pessoa2(nome){
    this.nome = nome

    this.falar = function(){
        return {
            nome:console.log(`Meu nome e ${this.nome}`)
        }
    }

}

const obj = new pessoa2('Victor')
obj.falar(obj)
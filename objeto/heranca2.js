//Cadeia de Prototipos(prototype chain)
Object.prototype.Attr4 = 'Z'//Isso ira adcionar um atributo ao objeto global
const avo = {Attr1: 'A'}
const pai = {__proto__:avo, Attr2: 'B'}
const filho = {__proto__:pai,Attr3: 'C'}
console.log(filho.Attr1,filho.Attr2,filho.Attr3,filho.Attr4)

const carro = {
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} de ${this.velMax}`
    }
}

const ferrari = {
    modelo:'F40',
    velMax:324,// Shadowing
}

const volvo = {
    modelo:'V40',
    velMax:200,
    status(){
        return `${this.modelo} : ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(volvo)

ferrari.acelerarMais(300)
console.log(ferrari.status())

volvo.acelerarMais(210)
console.log(volvo.status())
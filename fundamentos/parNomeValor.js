//par nome/valor
const saudacao = 'Ola'; // contexto lexico 1

function exec() {
    const saudacao = 'Falaa' //contexto lexico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade:32,
    peso:90,
    endereco: {
        rua:'barao de macaubas',
        numero:232
    
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
const alunos = [
    {nome:'Joao',nota:7.3,bolsista:false},
    {nome:'Maria',nota:9.2,bolsista:true},
    {nome:'Pedro',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true}
]

//Desafio 1:Todos os alunos sao bolsistas?
const resultado = alunos.map(a => a.bolsista)
const desafio = resultado.reduce(function(acumulador,atual){
    if(acumulador && atual == true){
        return true
    }else{
        return false
    }
})

console.log(desafio)

//Desafio 2 :Algum aluno e bolsista?

const resultado2 = alunos.map(a => a.bolsista)
const desafio2 = resultado2.reduce(function(acumulador,atual){
    if(acumulador || atual == true){
        return true
    }else{
        return false
    }
})

console.log(desafio2)

//Respostas do Professor abaixo
//Desafio 1
const todosBolsistas = (resultado3,bolsista) => resultado3 && bolsista
const resultDoProf = alunos.map(a => a.bolsista).reduce(todosBolsistas)
console.log(resultDoProf)

//Desafio 2
const algumBolsista = (resultado4,bolsista) => resultado4 || bolsista
const resultDoProf2 = alunos.map(a =>a.bolsista).reduce(algumBolsista)
console.log(resultDoProf2)
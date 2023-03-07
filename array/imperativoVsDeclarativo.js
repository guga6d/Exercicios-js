const alunos = [
    {nome:'Maria',nota:9.2},
    {nome:'Joao',nota:8.9}
]

//Imperativo
let resultado1 = 0
for(let i = 0; i<alunos.length; i++){
    resultado1 += alunos[i].nota
}
console.log(resultado1 / alunos.length)

//Declarativo
const getNota = a => a.nota
const soma = (total,atual) => total + atual
const resultado2 = alunos.map(getNota).reduce(soma)
console.log(resultado2 / alunos.length)
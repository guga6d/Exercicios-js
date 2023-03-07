const escola = [
    {
    nome:'Turma M1',
    alunos:[{
    nome:'Rebeca',
    nota:7.7
    },{
    nome:'Roberto',
    nota:6.7
    }]
    },
    {
    nome:'Turma M2',
    alunos:[{
        nome:'Gustavo',
        nota:8.5
    },{
        nome:'Raquel',
        nota:7.1
    }]
    }
]

const getNota = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 7.7, 6.7 ],[ 8.5, 7.1 ]))

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
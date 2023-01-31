let acesso = 'diretor'

switch (acesso) {
    case 'aluno':
        console.log('acesso ao horarios das aulas e notas')
        break
    case 'professor':
        console.log('acesso a mudancas de notas dos alunos')
        break
    case 'diretor':
        console.log('acesso a mudanca de horarios de aulas dos professores')
        break
        default: 
        console.log('acesso invalido')

}
//Closure E o escopo criado quando uma funcao E declarada
//Esse escopo permite a funcao acessar e manipular variaveis externas a funcao

//Contexto Lexico em acao!
const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
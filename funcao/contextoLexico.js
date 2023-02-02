const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhaFuncao()
}

exec()
//A funcao vai procurar a constante no escopo de onde ela foi definida e nao no escopo onde ela foi chamada
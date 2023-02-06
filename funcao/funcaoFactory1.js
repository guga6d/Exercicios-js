//Funcoes factory tem a funcionalidade de fabricar um objeto

//Factory simples
function criarPessoa(){
    return{
        nome:'Ana',
        idade:21
    }
}

console.log(criarPessoa())
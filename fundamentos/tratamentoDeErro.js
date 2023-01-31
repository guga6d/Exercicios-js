function tratarErroELancar(erro) {
    // throw new error ('...')
    // throw 10
    // throw true
    throw {
        name:erro.name,
        message:erro.message,
        date:new Date()
    }
}

function ImprimirNomeGritado(obj) {
   try {
    console.log(obj.name.toUppercase() + '!!!')
   } catch (e) {
    tratarErroELancar(e)

   } finally { 
    console.log('final')
   }
}

const obj = {nome: 'gustavo'}
 ImprimirNomeGritado(obj)

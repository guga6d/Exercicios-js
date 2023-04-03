// operador Rest(juntar)/Spread(espalhar)
//rest com parametro de funcao
function parametro(...b){
    return b
}
console.log(parametro(1,2,3,4,5))

// spread com objeto
const funcionario = {nome:'Maria',salario:10.345}
const clone = {ativo:true,...funcionario}
console.log(clone)

// spread com array
const grupoA = ['Joao','Maria','Antonio']
const grupoFinal = ['Carlos',...grupoA,'Francisco']
console.log(grupoFinal)
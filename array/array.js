console.log(typeof Array,typeof new Array, typeof [])

let aprovados = new Array('Gui','Bia','Ana')//forma de se criar um array
console.log(aprovados)

aprovados = ['Lucas','Joao','Matheus']//Reatribuicao dos elementos do array
console.log(aprovados[0])//Para acessar o elemento de um array use o Indice dentro de [],o indince de um array comeca do [0]
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//e possivel acessar um elemento que nao existe no array mas ele ira retornar undefined

aprovados[3] = 'Paulo'//forma de adcionar e reatribuir elementos de um array
aprovados.push('Pedro')//forma mais apropriada de adcionar elementos no array
console.log(aprovados.length)//.length retorna o tamanho do array

aprovados[9] = 'Rafael'//vc consegue adcionar elementos pulando indices do array mas os indices pulados serao criados e atribuidos como undefined
console.log(aprovados[8] === undefined)//true
console.log(aprovados)

aprovados.sort()//.sort() ira reordenar o array
console.log(aprovados)
delete aprovados[1]//deleta um elemento,ele ira ficar como undefined
console.log(aprovados[1])

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,1)/*.splice() exclui e tambem adciona elementos a partir de um determinado indice do array,
o primeiro paramentro sera o indice, o segundo parametro sera o numero de elementos que vc quer excluir do array,
do terceiro elemento pra frente vc pode atribuir elementos para o array
*/
console.log(aprovados)
aprovados.splice(1,0,'Carlos')
console.log(aprovados)
aprovados.splice(1,0,'Leo','Tom')
console.log(aprovados)
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um elemento como ultimo no array
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento como primeiro indice do array
console.log(pilotos)

//.splice() Pode adicionar e remover um Elemento no array

//Adcionar
pilotos.splice(2,0,'Massa','Bottas')
console.log(pilotos)
//Remover
pilotos.splice(2,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Retorna um novo array a partir do indice especificado o incluindo
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1,3)/*Primeiro parametro e o indice para comecar o novo array incluindo o proprio indice especificado,
Segundo parametro especifica o indice que termina o novo array criado excluindo o parametro especificado para o termino*/
console.log(algunsPilotos2)
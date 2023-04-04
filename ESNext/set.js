//Nao aceita repeticao/nao indexada
const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

const nomes = ['Raquel','Lucas','Ana','Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
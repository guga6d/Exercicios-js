console.log(this === global)
console.log(this === module)

console.log(this === exports)
console.log(this === module.exports)

function logThis(){
    console.log('dentro de funcao ...')
    console.log(this === global)
    console.log(this === exports)
    console.log(this === module.exports)
}

logThis()
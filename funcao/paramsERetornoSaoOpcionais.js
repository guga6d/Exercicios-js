function area(altura,largura){
    const area = altura * largura
    if(area > 20) {
        console.log(`Valor da area E maior do que o permitido ${area}m2`)
 } else {
    return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,6,12,45))
console.log(area(5,5))
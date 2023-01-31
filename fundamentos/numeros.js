const peso1 = 1.0;
const peso2 = Number('2.0');
const peso3 = Number('2.1');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso3));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); //o numero entre parenteses e o numero de casas decimais que ira ser mostrado
console.log(media.toString(2)); //2 entre parenteses transforma em binario com a funcao toString
console.log(typeof media);
console.log(typeof Number);
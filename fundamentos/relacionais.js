console.log('01)', '1' == 1);// Comparacao apenas entre os valores ('1' igual 1) = true
console.log('02)', '1' === 1);// comparacao entre valores e tipos ('1' extritamente igual 1) = false
console.log('03)', '3' != 3);// Diferente('3' diferente 3) = false
console.log('04)', '3' !== 3);//Extritamente diferente ('3' extritamente diferente 3) = true

console.log('05)', 3 < 2);// (3 menor que 2) = false
console.log('06)', 3 > 2); // (3 maior que 2) = true
console.log('07)', 3 <= 2);//(3 menor igual a 2) = false
console.log('08)', 3 >= 2);//(3 maior igual a 2) = true

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 ===d2);
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null);
console.log('13)',undefined === null);
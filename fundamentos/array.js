const valores = [7.7, 8.4, 6.5, 9.9];//Array E aberto com []
console.log(valores[0], valores[3]);//Use os [] para imprimi-lo no console
console.log(valores[4]);//buscar um indice que nao existe no array ele nao volta um erro apenas volta como undefined

valores[4] = 10;
console.log(valores);
console.log(valores.length);//.length te dara a quantidade de elementos de um array

valores.push({id: 3}, false, null, 'teste')//.push adiciona elementos no array
console.log(valores);

console.log(valores.pop());//tira um elemento do array,se nao tiver o indice ira tirar o ultimo
console.log(valores);
delete valores[0];//deleta um elemento do array deixando um empty item no lugar
console.log(valores);

console.log(typeof valores)
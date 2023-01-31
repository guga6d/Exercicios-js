const escola = "cod3r"; //String E uma cadeia de caracteres delimitada por('',"",ou crase)

console.log(escola.charAt(4));//.charAt Procura um caractere na String comecando do indice 0
console.log(escola.charAt(5));//Nao gera um erro se estiver fora da quantidade de caractere mas vai retornar um valor vazio
console.log(escola.charCodeAt(3));//Pega o valor na tabela unicode
console.log(escola.indexOf("3"));

console.log(escola.substring(1));//substring vai a partir do indice escolhido ate o ultimo
console.log(escola.substring(0, 3));//Va do indice 0 e me de 3 caracteres

console.log('Escola '.concat(escola).concat("!"));//usou um literal e uma const ja declarada e uma string
console.log('Escola '+ (escola) + ("!"));//o + serve tambem para concatenar uma string
console.log(escola.replace(3, 'e'));//Substituir um caractere por outro

console.log('Ana,Joao,Gustavo'.split(','));
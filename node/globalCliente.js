require('./global')

console.log(Minhaapp.saudacao())

Minhaapp.nome = 'Eita!' //Cuidado ao mudar um atributo do global,para evitar isso vc pode criar um atributo com o .freeze()
console.log(Minhaapp.nome)
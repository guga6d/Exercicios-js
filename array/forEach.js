const aprovados = ['Agatha','Aldo','Daniel','Yago']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const listaAprovados = nome => console.log(nome)

aprovados.forEach(listaAprovados)

//forEach sempre recebe 3 paramentros,1.nome,2.indice,3.array
aprovados.forEach(function(nome,indice,array){
    console.log(nome,indice,array)
})


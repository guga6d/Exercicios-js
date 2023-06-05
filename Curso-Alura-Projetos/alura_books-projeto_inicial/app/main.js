const apiEndPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
let livros = []
buscarLivrosDaApi()

async function buscarLivrosDaApi() {
    const res = await fetch(apiEndPoint)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    mostrarLivrosNaTela(livrosComDesconto)
    
}



// {/* <div class="livro">
// <img class="livro__imagens" src="imagens/Cangaceiro-Javascript.png" alt="Capa do livro Cangaceiro JavaScript" />
// <h2 class="livro__titulo">
//   Cangaceiro JavaScript:
//   Uma aventura no sertão da programação
// </h2>
// <p class="livro__descricao">Flávio Almeida</p>
// <p class="livro__preco" id="preco">R$29,90</p>
// <div class="tags">
//   <span class="tag">Front-end</span>
// </div>
// </div> */}
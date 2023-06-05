const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))


function filtrarLivros() {
    const botao = document.getElementById(this.id)
    const categoria = botao.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    mostrarLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel') {
        let valor = livrosFiltrados.reduce((acc,livro) => acc + livro.preco,0)
        exibirPrecoTotalDosLivrosNaTela(valor)
    }else {
        elementoSectionPrecoTotalDosLivros.innerHTML = ""
    }
    
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
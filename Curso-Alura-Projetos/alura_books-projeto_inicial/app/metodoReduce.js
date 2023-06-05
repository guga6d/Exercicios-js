
function exibirPrecoTotalDosLivrosNaTela(valor) {
    elementoSectionPrecoTotalDosLivros.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valor.toFixed(2)}</span></p>
  </div>`
}
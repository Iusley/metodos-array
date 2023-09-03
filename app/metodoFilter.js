// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')

// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront)

// function filtrarLivrosDeFront() {
//     const livrosFiltrados = livros.filter(livro => 
//         livro.categoria == 'front-end')
//         console.log(livrosFiltrados)
// }


const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(event) {
    const elementoBtn = event.target
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if(categoria =='disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livros)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}


function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
        elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
        `
}


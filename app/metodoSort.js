let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco-b.preco)  //ordenar do menor para o maior
    //let livrosOrdenados = livros.sort((a,b) => a.preco-b.preco)  //ordenar do maior para o menor
    exibirLivrosNaTela(livrosOrdenados)
}
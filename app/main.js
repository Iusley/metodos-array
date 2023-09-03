let livros = []
const endpointDaAPI = 'https://raw.githubusercontent.com/Iusley/metodos-array/main/livros.json'
const livrosComDesconto = ''

getBuscarLivrosdaAPI()

/*definindo uma função assincrona aguardando uma "promessa". A definição 
de uma função assincrona ajuda a evitar um carregamento de dados demorado 
caso o "banco de dados" seja extenso*/


async function getBuscarLivrosdaAPI() {              
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.table(livros)
    livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
}




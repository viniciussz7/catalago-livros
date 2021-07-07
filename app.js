const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar por categoria?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Tecnologia', '/ Inspiração', '/ Educação Financeira', '/ Auto-ajuda', '/ Produtividade')

    const entradaCategoria = readline.question('Qual categoria você quer?')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas) //ordem crescente de paginas
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}

// Puxar a base de dados dos livros
const livros = require('./database');

// Função para padronizar entrada com primeira letra maiúscula
function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

// Pegar o input dos usuários
// Se for SIM, mostrar as categorias disponíveis, e pergunta qual categoria deseja escolher
// Se for NÃO, mostrar lista com todos os livros por ordem crescente de páginas

const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro por categoria? - S/N ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', ' - História brasileira', ' - Américas', ' - Tecnologia', ' - Estilo de vida')

    const entradaCategoria = readline.question('Qual categoria voce deseja escolher: ')
    const entradaCategoriaMaiuscula =  capitalizeFirstLetter(entradaCategoria)

    const retorno = livros.filter(livro => livro.categoria === entradaCategoriaMaiuscula)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}
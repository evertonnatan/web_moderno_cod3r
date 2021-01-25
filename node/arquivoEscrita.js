//Como persistir um arquivo:

const fs = require('fs')

const produto = {
    nome: "Celular",
    preco: 1700.00,
    desconto: 0.15
}

// Converte a const produto num JSON e salva o conteúdo no arquivo "aruivoGerado.json"
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || "Arquivo Salvo!")
})
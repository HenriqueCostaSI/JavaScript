const fs = require('fs');

const produto = {
    nome: 'Caneta',
    preco: 1.99,
    desconto: 0.05
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!');
});
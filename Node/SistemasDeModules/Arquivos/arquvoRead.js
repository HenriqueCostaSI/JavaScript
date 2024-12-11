const fs = require('fs')



const caminho = __dirname + '/arquivo.json';

//sincrono

const conteudo = fs.readFileSync(caminho, 'utf8');

console.log(conteudo);

//assincrono
fs.readFile(caminho, 'utf8', (err, conteudo) => {
    const config = JSON.parse(conteudo);

    if (err) {
        console.log(err);
        return;
    }
    console.log(`${config.pessoa.nome} - ${config.idade}`);
});


const config = require('./config.json');
console.log(config.pessoa.nome);

fs.readdir(__dirname, (err, arquivos) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(arquivos);
});
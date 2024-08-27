const Cachorro = require('./z/mod2');

const doguinho = new Cachorro('Bob');
doguinho.latir();

// ./ -> pasta atual
// ../ -> pasta anterior
// ../../ -> pasta anterior a anterior


console.log(__filename); // caminho completo do arquivo
console.log(__dirname); // caminho completo da pasta

const path = require('path');
console.log(__dirname);
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'arquivo.txt')); // voltei duas pastas e cheguei no arquivo
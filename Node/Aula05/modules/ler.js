const fs = require('fs').promises;


module.exports = (caminhoArquivo) => {
    return fs.readFile(caminhoArquivo, 'utf-8');
}

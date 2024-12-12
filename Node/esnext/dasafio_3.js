const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function lerArquivo(x) {
  return new Promise((resolve) => {
    fs.readFile(x, (_, conteudo) => {
      resolve(conteudo.toString());
    });
  });
}

lerArquivo(caminho)
  .then(conteudo => conteudo.split('\n'))
  .then(linhas => linhas.join(", "))
  .then(conteudo => console.log(`o valor é ${conteudo}`));

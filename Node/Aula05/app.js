const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

// const pessoas = [
//     {nome: 'Luiz', idade: 20},
//     {nome: 'Maria', idade: 30},
//     {nome: 'João', idade: 40},
//     {nome: 'Pedro', idade: 50}
// ];

// const json = JSON.stringify(pessoas, '', 2);// 2 é a quantidade de espaços
// escreve(caminhoArquivo, json);

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);

  dados.forEach((val) => {
    console.log(val.nome);
  });
  lerArquivo(caminhoArquivo);
}

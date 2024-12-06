const express = require('express');
const app = express();
const bancoDeDados = require('./BancoDeDados');
const port = 3003;

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProduto());// Converter para JSON

});

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id));
});


app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto); // JSON
});
/* 
app.use('/', (req, res, next) => {
    res.send({ nome: 'Servidor rodando' });
});
 */
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
const express = require('express');
const app = express();
const port = 3003;

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Caneta', preco: 1.99 });// Converter para JSON

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
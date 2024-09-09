const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//middleware-> função que é executada antes de qualquer rota.
function meuMiddleware(req, res, next) {
    req.session = {nome: 'Guilherme', sobrenome: 'Moraes'};
    console.log();
    console.log('Passei no seu middleware');
    console.log(``);
    next();//se não chamar o next, a requisição não será finalizada.
}

// Rotas da home
route.get('/',meuMiddleware ,homeController.paginaInicial, (req, res, next) => {
    console.log('Estou aqui na home');
    console.log();
});
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;
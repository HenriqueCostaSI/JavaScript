const express = require('express');	
const route = express.Router();
const homecontroller = require('./controllers/homeController');


route.get('/', homecontroller.paginaInicial);
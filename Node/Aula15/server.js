const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://henrimatheu:bKX2i6P6t7mErOMW@cursojs.q3cxx.mongodb.net/BASE?retryWrites=true&w=majority&appName=CursoJs';	
mongoose.connect(connectionString);

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

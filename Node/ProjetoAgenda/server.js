require('dotenv').config();//importa o dotenv que serve para importar as variáveis de ambiente
const express = require('express');//importa o express
const app = express();//cria o servidor
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));//conecta ao banco de dados
const session = require('express-session');//serve para salvar a sessão no banco de dados
const MongoStore = require('connect-mongo');//para salvar a sessão no banco de dados
const flash = require('connect-flash');//serve para mostrar as mensagens de erro
const routes = require('./routes');//importa as rotas
const path = require('path');//importa o path para poder usar o path.resolve
const helmet = require('helmet');//serve para proteger o servidor
const csrf = require('csurf');//serve para proteger o servidor
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));//

const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,// 7 dias
    httpOnly: true
  }
});//

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));//define o caminho para as views
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});//inicializa o servidor

//Padrao de Projeto MVC(Model View Controller)
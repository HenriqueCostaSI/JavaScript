const express = require("express");
const app = express();

app.use(
  express.urlencoded(
    { extended: true }
  )
);

//http://facebook.com/profiles/123
app.get("/", function (req, res) {
  // req = request, res = response
  res.send(`
    <form action="/" method="POST">
    Nome: <input type = "text" name="nome"
    <button>Enviar</button>
    </form>
    `);
});


app.get('/teste:@idUsuarios?/:parametroOpcionais', (req, res) => {
  console.log(req.params);//retorna um objeto com os parametros
  console.log(req.query);//retorna um objeto com os query
  res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});
  
app.listen(3000, function () {
  console.log("Acessar http://localhost:3000");
});

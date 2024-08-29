const express = require("express");
const app = express();

// CRUD -> Create, Read, Update, Delete
//          Post   Get   Put     Delete

// http://meuSite.com/ -> get  entregue a pagina inicial
// http://meuSite.com/contato -> get  entregue a pagina de contato

//Uma rota para tratar as requisições do tipo GET no '/'
app.get("/", function (req, res) {
  // req = request, res = response
  res.send(`
    <form action="/" method="POST">
    Nome: <input type = "text" name="nome"
    <button>Enviar</button>
    </form>
    `);
});

app.post("/", (req, res) => {
  res.send("Recebi o formulário");
});

app.get("/contato", (res, req) => {
  res.send("Obrigado por entrar em contato");
});

//uma porta serve para receber requisições
app.listen(3000, function () {
  console.log("Acessar http://localhost:3000");
});

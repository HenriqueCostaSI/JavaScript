const bodyParser = require('body-parser');//
const express = require('express');
const app = express();
const multer = require('multer');


//Middleware
app.use(express.static('.'));// Use the express-static middleware and tell it to use the .public folder
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/teste', (req, res) => {
    res.send('Ok');
});

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage }).single('arquivo');


app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.');
        }
        res.end('Concluído com sucesso.');
    });
});

app.post('/formulario', (req, res) => {
   res.send({
        ...req.body,
        id: 1
    });


});

app.get('/parOuImpar', (req, res) => {
    //req.body.numero -> Recupera o valor do campo numero do formulário
    //req.query.numero -> Recupera o valor do campo numero da URL
    //req.params.numero -> Recupera o valor do campo numero da URL
    const par = parseInt(req.query.numero) % 2 === 0;
    res.send({
        resultado: par ? 'par' : 'impar'
    });
});


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
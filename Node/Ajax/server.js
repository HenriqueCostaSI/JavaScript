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

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
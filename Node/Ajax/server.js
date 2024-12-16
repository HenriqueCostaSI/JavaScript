const bodyParser = require('body-parser');//
const express = require('express');
const app = express();


//Middleware
app.use(express.static('.'));// Use the express-static middleware and tell it to use the .public folder
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/teste', (req, res) => {
    res.send('Ok');
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
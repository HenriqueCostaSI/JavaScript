const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod2');

const p1 = new Pessoa('Henrique', 21);

axios.get('https://www.otaviommiranda.com.br/files/jsaon/pessoas.json')
.then(response => console.log(response.data))
.catch(e=>console.log(e));

const moduleA = require('../../moduleA');
console.log(moduleA.ola);

const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
}).listen(8080);
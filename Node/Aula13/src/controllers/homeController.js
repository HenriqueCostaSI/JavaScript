exports.paginaInicial = (req, res, next) => {
    console.log('entrei na pagina inicial');
    res.render('index');
    console.log('Olha oo que tem dentro de req.session');
    next();//vai para o proximo middleware
};

exports.trataPost = (req, res, next) => {
    res.send('Ei, sou sua nova rota de POST.');
};
exports.paginaInicial = (req, res) => {
  // console.log(req.session.nome);
  req.flash('info', 'Olá mundo');//mesagem que dura uma autalizacao de pg
  console.log(req.flash('info'));
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
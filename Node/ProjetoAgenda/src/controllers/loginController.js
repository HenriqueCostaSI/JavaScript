const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  
  if(req.session.user) return res.render('login-logado');//se o usuário está logado, não vai renderizar a página de login
  return res.render('login');//
};

exports.register = async function(req, res) {
  try {
    const login = new Login(req.body);// cria um novo objeto da classe Login
    await login.register();//chama o método register

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('/');
      });
      return;
    }

    req.flash('success', 'Seu usuário foi criado com sucesso.');
    req.session.save(function() {
      return res.redirect('');//
    });
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.login = async function(req, res) {
  try {
    const login = new Login(req.body);// cria um novo objeto da classe Login
    await login.login();//chama o método login

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('/');
      });
      return;
    }

    req.flash('success', 'Você entrou no sistema.');
    req.session.user = login.user;
    req.session.save(function() {
      return res.redirect('/');
    });
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.logout = function(req, res) {
  req.session.destroy();//destroi a sessão
  res.redirect('/');
};
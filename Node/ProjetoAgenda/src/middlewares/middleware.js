exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors');//local é uma variável de escopo global
  res.locals.success = req.flash('success');
  res.locals.user = req.session.user;
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
      return res.render('404');
    }
    next();

  }

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

exports.loginRequired = (req, res, next) => {
  if(!req.session.user) {//se não tiver usuário logado
    req.flash('errors', 'Você precisa fazer login.');
    req.session.save(() => res.redirect('/'));//salva a sessão e redireciona para a home
    return;
  }

  next();
} 
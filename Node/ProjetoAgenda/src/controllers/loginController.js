exports.index = (req, res) => {
  res.render('login');
  return;
};
exports.register = function (req, res) {
  console.log(req.body);
  res.send(req.body);
};
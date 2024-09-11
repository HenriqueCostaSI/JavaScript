module.exports = (req, res, next) => {
    console.log('Passei no seu middleware');
    console.log();
    next();
};
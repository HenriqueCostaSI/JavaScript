exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type = "text" name="nome"
        Outro campo: <input type = "text" name="outrocampo">
        <button>Enviar</button>
        </form>
        `);
};
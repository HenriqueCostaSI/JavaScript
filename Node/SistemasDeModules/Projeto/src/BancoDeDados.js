const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {

}

function salvarProduto(produto) {
    if (!produto?.id) {
        produto.id = sequence.id; // Gera o ID se não existir
    }

    produtos[produto.id] = { ...produto }; // Garante que o objeto original não seja modificado
    return { ...produto }; // Retorna uma cópia do produto
}
function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos }
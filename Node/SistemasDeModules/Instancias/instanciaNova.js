//Uma factory é uma função que retorna um objeto
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++;
        }
    }
}
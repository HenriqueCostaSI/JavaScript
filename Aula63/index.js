//factory Function
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            console.log(`${this.nome} ${this.sobrenome} está falando sobre ${assunto}`);
        },
        altura,
        peso,
        //getter -> 
        get imc () {
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2); 
        },
        //setter ->
        set nomeCompleto(value) {
            value = value.split(' ');
            this.nome = value.shift();
            this.sobrenome = value.join(' ');
        },

        get nomeC() {
            return `${this._nome} ${this._sobrenome}`;
        } 
    }    
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.70, 60);
const p2 = criaPessoa('Maria', 'Otávio', 1.60, 55);
console.log(p1.imc);
console.log(p1.fala('JavaScript'));

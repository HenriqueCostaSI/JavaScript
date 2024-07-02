const _velocidade = Symbol("velocidade");
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if(valor > 200) {
            this[_velocidade] = 200;
        } else if(valor < 0) {
            this[_velocidade] = 0;
        } else {
            this[_velocidade] = valor;
        }
    }

    acelerar() {
        if (this[_velocidade] < 200){
           this[_velocidade] += 10;
        }
    }
    
    frear() {
        if (this[_velocidade] > 0){
            this[_velocidade] -= 20;
        }
    }   
}

const car1 = new Carro("Fusca");

for(let i = 0; i <= 200; i++) {
    car1.acelerar();
}


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor) {
        const nome = valor.split(" ");
        this.nome = valor.shift();
        this.sobrenome = valor.join(" ");
    }    

}


const p1 = new Pessoa("Luiz", "Miranda");
p1.nomeCompleto = "Luiz Miranda Barão";
console.log(p1.nomeCompleto);
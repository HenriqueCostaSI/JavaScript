class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' dispositivo já está ligado!');
            return;
        }

        this.ligado = true;
    }

    desligar() {
       if(!this.ligado) {
            console.log(this.nome + ' dispositivo já está desligado!');
            return;
        }
    }
}

const celular = new DispositivoEletronico('Celular');
celular.ligar();
celular.desligar();
console.log(celular);


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, tamanho) {
        super(nome);
        this.cor = cor;
        this.tamanho = tamanho;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, nfc ) {
        super(nome);
        this.nfc = true;
        
    }

    ligar() {
        console.log('O dispositivo não suporta ligar!');
    }
}

const smartphone1 = new Smartphone('Samsung', 'Preto', '5.5');
smartphone1.desligar();
console.log(smartphone1);

const tablet1 = new Tablet('iPad', false);
tablet1.ligar();

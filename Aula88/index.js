function teste () {
  console.log("Teste no construtor");
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  //Método instancia
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  //Método estático
  static get volumeMáximo() {
    return 100;
  }

  static somar(n1, n2) {
    return n1 + n2;
  }
}

const control1 = new ControleRemoto("LG");
control1.aumentarVolume();

ControleRemoto.volumeMáximo();
console.log(ControleRemoto.somar( 5, 456));
console.log(control1);

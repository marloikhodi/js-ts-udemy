function teste() {
  console.log(this);
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    // teste(); // Output = Object [global]
  }

  // Metodo de instancia, chamado com instancia.metodo()
  aumentarVolume() {
    this.volume += 2;
  }

  // Metodo de instancia, chamado com instancia.metodo()
  diminuirVolume() {
    this.volume -= 2;
  }

  // Metodo Estatico, chamado com class.metodo() -> nao tem acesso aos dados da instancia
  static soma(x, y) {
    console.log(this);
    return x + y;
  }
}

const controle = new ControleRemoto("Smart Tv");
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);

const valor = ControleRemoto.soma(2, 4);
console.log(valor);

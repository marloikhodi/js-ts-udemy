class Animal {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

class Cachorro extends Animal {
  constructor(nome, raca, latido, cor) {
    super(nome, raca);
    this.latido = latido;
    this.cor = cor;
  }

  latir() {
    for (let v = 0; v < this.latido; v++) {
      console.log(`O cachorro ${this.nome} está latindo!`);
    }
  }
}

const bob = new Cachorro("Bob", "Vira lata", 3, "caramelo");
bob.latir(3);

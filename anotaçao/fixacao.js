class Cachorro {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }

  latir(vezes) {
    for (let v = 0; v < vezes; v++) {
      console.log(`O cachorro ${this.nome} está latindo!`);
    }
  }
}

const bob = new Cachorro("Bob", "Vira lata");
bob.latir(3);

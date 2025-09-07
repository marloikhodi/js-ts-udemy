class DispositivoEletronico {
  constructor(nome, id) {
    this.nome = nome;
    this.id = id;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já ligado`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já desligado`);
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, id, cor, modelo) {
    // chamando os valores do pai e os novos que entram na classe nova
    super(nome, id); // o super vai puxar os this da classe pai
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log("Polimorfismo!!");
  }
}

const s1 = new Smartphone("Iphone", 10, "Preto", "14 Pro Max");
s1.ligar();
console.log(s1);

const t1 = new Tablet("Ipad", true);
t1.ligar();
console.log(t1);

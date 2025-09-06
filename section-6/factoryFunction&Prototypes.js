const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  },
};

// const pessoaPrototype = { ...falar, ...beber, ...comer };
const pessoaPrototype = Object.assign({}, falar, comer, beber);
//Dessa maneira será desaclopado do FF, podendo ser utilizado em outros Obj (descomposição)

function criaPessoa(nome, sobrenome) {
  //   const pessoaPrototype = {
  //     falar() {
  //       console.log(`${this.nome} está falando`);
  //     },
  //     comer() {
  //       console.log(`${this.nome} está comendo`);
  //     },
  //     beber() {
  //       console.log(`${this.nome} está bebendo`);
  //     },
  //   };

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Deivid", "Marlo");
console.log(p1);
p1.falar();

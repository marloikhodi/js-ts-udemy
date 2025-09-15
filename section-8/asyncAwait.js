// function rand(min = 0, max = 3) {
//   max *= 1000;
//   min *= 1000;
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function aguarde(msg, tempo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof msg !== "string") {
//         reject("Valor errado!");
//         return;
//       }
//       resolve(msg.toUpperCase() + " - Passei na promise");
//       return;
//     }, tempo);
//   });
// }

// async function fases() {
//   // async libera a utilização de await para aguardar a Promise
//   try {
//     const fase04 = aguarde("fase 4", 1000); //sem await retorna Promise { <pending> }
//     console.log(fase04);
//     setTimeout(() => {
//       console.log("Função carregada: ", fase04);
//     }, 1100);
//     const fase05 = await aguarde("fase 5", rand(2));
//     console.log(fase05);
//     const fase06 = await aguarde("fase 6", rand(2));
//     console.log(fase06);

//     console.log("Fim da Sequencia");

//     const erro = await aguarde(null, rand());
//     console.log(erro);
//   } catch (e) {
//     console.log("Error: " + e);
//   }
// }

// fases();

class Ligacao {
  constructor(num) {
    this.num = num;
  }

  tocando(num) {
    return new Promise((resolve) => {
      console.log("Realizando a ligação do número: " + this.num);
      setTimeout(() => {
        resolve(console.log("Ligação atendida pelo número: " + num));
      }, 3000);
    });
  }
}

async function telefonema() {
  const numero = new Ligacao(1198888777);
  await numero.tocando(11977779999);
  console.log("ligação encerrada!");
}

telefonema();

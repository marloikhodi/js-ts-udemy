function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function aguarde(msg, tempo) {
  return new Promise((resolve, reject) => {
    //seta o Promise com o construtor da promise e sempre vai ter dois parametros (comumente chamados de resolve e reject)
    if (typeof msg !== "string") reject("Valor errado!");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

const promises = [
  "Primeiro Valor",
  aguarde("Promise 1", 3000),
  aguarde("Promise 1", 500),
  aguarde("Promise 1", 1000),
  "Outro Valor",
];

Promise.all(promises).then((valor) => {
  // .all vai realizar todas as Promises antes de retornar com o valor, *em formato de array
  console.log(valor);
});

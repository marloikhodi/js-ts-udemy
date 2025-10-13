function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function aguarde(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Valor errado!");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

const promises = [
  aguarde("Promise 1!", rand(1, 5)),
  aguarde("Promise 2!", rand(1, 5)),
  aguarde("Promise 3!", rand(1, 5)),
  //   aguarde(1000, rand(1, 5)),
];

Promise.all(promises)
  // retorna todos os valores de todas as promises quando elas forem concluidas, caso uma de erro, todas cancelam
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.race(promises)
  // retorna somente o valor da primeira promisse a ser concluida
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  });

function downloadPage(value = true) {
  const inCache = value;

  if (inCache) {
    return Promise.resolve("Pagina em cache");
  }

  return Promise.reject("Pagina não está em cache");
}

downloadPage(false)
  .then((dados) => {
    console.log(dados);
  })
  .catch((e) => console.log("ERRO", e));

  //test
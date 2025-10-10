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

aguarde("Primeira Frase", rand(1, 3)) //passado pelo resolve, cai no .then
  .then((resposta) => {
    console.log(resposta);
    return aguarde("Segunda Frase", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return aguarde("Terceira Frase", rand(1, 3));
    // return aguarde(222, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((e) => {
    // caso de erro, cai diretamente no catch!
    console.log("Erro:", e);
  });

console.log("Isso será exibido antes das promisses");
//test
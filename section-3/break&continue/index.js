const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let n of num) {
    if (n === 7) {
        // break  //vai parar o sistema, chegando no 7, ela para por completo
        continue //executa o codigo abaixo, pulando o 7
    }

    console.log(n)
}
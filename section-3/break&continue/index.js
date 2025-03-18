const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let n of num) {
    if (n === 2) {
        console.log("sem número 2")
        continue //executa o codigo abaixo, pulando o 7 (deve ser colocado antes da açao)
    }

    console.log(n)

    if (n === 7) {
        break //vai parar o sistema, chegando no 7, ela para por completo
    }

}
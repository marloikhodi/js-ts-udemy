function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let rand = random(0, 50)

while (rand !== 10) { //o while primeiro verifica a condiçao, apos isso, executa o codigo
    rand = random(0, 50)
    console.log(rand)
}

console.log("###")

do {
    rand = random(0, 50)
    console.log(rand) //o dowhile primeiro executa o codigo, apos isso, realiza a veriifcaçao da condiçao
} while (rand !== 10);



// let num = 0

// while (num <= 10) {
//     console.log(num)
//     num++
// }
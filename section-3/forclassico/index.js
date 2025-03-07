const numeros = [1, 2, 3, 4, 5]

for (n in numeros) { //feito com padrao em python
    console.log(`numeros ${numeros[n]}`)
}

//i = index, utiliado por padrao no for

// for (let i = 0; i <= 5; i++) { //cada ; conta como operaçao diferente
//     console.log(i)
// }

// for (let i = 500; i >= 5; i -= 10) {
//     console.log(i)
// }

const frutas = ["maça", "pêra", "uva"]
for (let i = 0; i < frutas.length; i++) {
    console.log(`Possuo a venda: ${i} ${frutas[i]}`)
}

for (i in frutas) {
    console.log(`Possuo a venda: ${i} ${frutas[i]}`)
}

while (true) {
    console.log("oi")
    return

}
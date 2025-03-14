const frutas = ['Pera', 'Maça', 'Uva']

for (let i in frutas) {
    console.log(frutas[i])
}

const pessoa = {
    nome: `Marlo`,
    sobrenome: `Santo`,
    idade: 20
}

for (let key in pessoa) {
    console.log(`${key}: ${pessoa[key]}`) // pra utilizar o valor da dentro da chave, necessario colocar var[key]
}
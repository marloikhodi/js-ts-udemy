const numeros = [1, 12, 33, 24, 335, 66, 7, 8, 90, 23, 123, 2]

const dobroNumeros = numeros.map((valor, indice, array) => valor * 2) // diferente do filter, deve ser retornado oque acontece com os dados
const zeroNumeros = numeros.map((valor, indice, array) => 0)
const indiceNumeros = numeros.map((valor, indice, array) => indice)
// console.log(dobroNumeros)
// console.log(zeroNumeros)
// console.log(indiceNumeros)

const pessoas = [
    { nome: "marlon", idade: 21 },
    { nome: "pedro", idade: 11 },
    { nome: "joao", idade: 41 },
    { nome: "maria", idade: 1 },
    { nome: "luiz", idade: 23 },
    { nome: "cleberona", idade: 33 },
    { nome: "arthur", idade: 12 }
]

const nomePessoas = pessoas.map(obj => obj.nome)
const semNomePessoas = pessoas.map(obj => ({ idade: obj.idade }))
const idPessoas = pessoas.map((obj, indice) => {
    // return {  //dessa maneira retorna um objeto novo, sem mexer na const pessoas, porem anonimo
    //     id: indice ,
    //     nome: obj.nome,
    //     idade: obj.idade
    // }

    // const novoObj = { ...obj } //dessa maneira retorna um objeto novo, sem mexer na const pessoas
    // novoObj.id = indice
    // return novoObj

    obj.id = indice //retorna o obj pessoas, e altera ele
    return obj
})
console.log(nomePessoas)
console.log(semNomePessoas)
console.log(idPessoas)
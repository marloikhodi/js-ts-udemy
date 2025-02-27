const pessoa = {
    nome: `Deivid`,
    sobrenome: `Marlon`,
    idade: 20,
    endereco: {
        rua: `Av Brasil`,
        numero: 28
    }
}
// atribuiçao normal
//const nome = pessoa.nome 

//Atribuição via desestruturação:
const { nome = `placeholder`, sobrenome, idade: age } = pessoa
console.log(`Me chamo ${nome} ${sobrenome} e tenho ${age} anos de idade!`)

const { endereco: { rua, numero }, endereco } = pessoa
console.log(`Moro na ${rua}, número ${numero}!`)
console.log(endereco, `\n`)

const { idade, ...resto } = pessoa
console.log(idade, resto)
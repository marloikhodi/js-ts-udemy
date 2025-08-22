// // const nomes = ['test1', 'test2', 'test3']
// const nomes = new Array('test1', 'test2', 'test3', 'test4', 'test5')
// nomes[2] = 'Joao'
// console.log(nomes)
// delete nomes[1]
// console.log(nomes)

// const novo = nomes
// novo.pop()
// console.log(nomes)

// const outronovo = [...nomes] //copia o array sem linkar
// novo.pop()
// console.log(outronovo)
// console.log(nomes)

// console.log(outronovo.length) //quantidade de itens, nao indices

// const removido = nomes.pop() //remove do final
// console.log(nomes, removido)

// const removido = nomes.shift() //remove do começo
// console.log(nomes, removido)

// nomes.push('test4')
// nomes.unshift('test5')
// console.log(nomes)

// const novo = nomes.slice(1, 3) //inclui o indice inicial e termina antes do informado (informa o 3 puxa o 2)
// const novo2 = nomes.slice(0, -1)
// console.log(novo, novo2)

const nome = 'Jose Alberto Carlos Silva Pereira'
const nomes = nome.split(' ')
console.log(nomes)
const nome2 = nomes.join(' ')
console.log(nome2)

for (i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}
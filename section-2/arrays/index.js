//             0       1        2       3
const alunos= ['marlo','david', 'joao', 'pedro']
console.log(alunos[3]) // para acessar o index necessario, utiliza cochete 
alunos[alunos.length] = 'carlos' //adicionar ao final do array
alunos.unshift('maria') // adiciona ao começo do array
alunos.unshift('jose') // adiciona ao começo do array
alunos.push('otavio') //melhor maneira de adicionar um index ao final do array
// alunos[3] = 'silvio'
// alunos[4] = 'pedro'

console.log(alunos.length)
console.log(alunos)

// const removido = alunos.pop() remove do final da array
const removido = alunos.shift() // remove do começo da array
console.log(`aluno removido: ${removido}`)
console.log(alunos)

delete alunos[1]
console.log(alunos)

console.log(alunos.slice(0,-3))
console.log(typeof alunos)
console.log(alunos instanceof Array)
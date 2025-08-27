//Filter vai sempre retornar um array com a mesma quantidade de elementos ou menos

const numeros = [1, 12, 33, 24, 335, 66, 7, 8, 90, 23, 123, 2]
//versao sem filter (auto criada)
function maiorque10(num) {
    let numenor = []
    let numaior = []
    for (let n of num) {
        n > 10 ? numaior.push(n) : numenor.push(n)
    }
    // console.log("numeros maior que 10:", numaior)
    // console.log("numeros menores que 10:", numenor)
}

maiorque10(numeros)

//versao com filter
function callbackFilter(valor, indice, array) {
    // console.log(valor, indice, array)
    return valor < 10 //true
}
const numerosFiltrados = numeros.filter(valor => valor > 10) //dentro do .filter() deve ter uma function
const numerosFiltrados2 = numeros.filter(callbackFilter)

// console.log("numeros maior que 10:", numerosFiltrados)
// console.log("numeros menores que 10:", numerosFiltrados2)

const pessoas = [
    { nome: "marlon", idade: 21 },
    { nome: "pedro", idade: 11 },
    { nome: "joao", idade: 41 },
    { nome: "maria", idade: 1 },
    { nome: "luiz", idade: 23 },
    { nome: "cleberona", idade: 33 },
    { nome: "arthur", idade: 12 }
]

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5)
const pessoasMaiorIdade = pessoas.filter(valor => valor.idade > 20)
const pessoasFimNomeA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith("a"))
// console.log(pessoasComNomeGrande)
// console.log(pessoasMaiorIdade)
// console.log(pessoasFimNomeA)
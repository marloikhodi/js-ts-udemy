const nome = `Deivid Marlon`
const nomes = [`Marlon`, `Santos`, `Serafim`]
//for of funciona com variaveis iteraveis (possuem indices) 
for (valor of nome) {
    console.log(valor)

    valor === 'D' ? console.log(`Valor é D`) : null // o dado em valor, é exatamente o mesmo que está na const, ao invés de um indicie
}

nomes.forEach((valor, indicie, array) => { console.log(valor, indicie, array) }) //utilizado juntamente com arrays
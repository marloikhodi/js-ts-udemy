const numeros = [1, 12, 33, 24, 335, 66, 7, 8, 90, 23, 123, 2]

//versao sem filter (auto criada)
function maiorque10(num) {
    let numenor = []
    let numaior = []
    for (let n of num) {
        n > 10 ? numaior.push(n) : numenor.push(n)
    }
    console.log("numeros maior que 10:", numaior)
    console.log("numeros menores que 10:", numenor)
}

maiorque10(numeros)

//versao com filter
function callbackFilter(valor, indice, array) {
    // console.log(valor, indice, array)
    return valor < 10 //true
}
const numerosFiltrados = numeros.filter(valor => valor > 10)
const numerosFiltrados2 = numeros.filter(callbackFilter)

console.log("numeros maior que 10:", numerosFiltrados)
console.log("numeros menores que 10:", numerosFiltrados2)
function* geradora1() {
    yield 'Valor1'
    yield 'Valor2'
    yield 'Valor3'


}
const g1 = geradora1()
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
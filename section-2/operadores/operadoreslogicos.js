/*
Operadores Logicos
&& = and (Todas as expressoes precisam ser verdadeiras para retornar true)
|| - or (Uma das expressoes precisa ser verdadeira para retornar true)
! = not (Inverte o valor entre True e False)
*/

const possuodinheiro = true
const estasollafora = true

console.log(possuodinheiro && estasollafora) //retorna *true pois ambas as const sao verdadeiras, sendo feita a leitura, possuo dinheiro e esta sol la fora

const tenhocredito = true
const possuodinheiro1 = false

console.log(possuodinheiro1 || tenhocredito) //retorna *true pois uma das const sao verdadeiras, sendo feita a leitura, possuo dinheiro ou tenho credito

console.log(!false) //retorna *true
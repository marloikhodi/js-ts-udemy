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

/*
&& = false && true = false (assim que localiza uma expressão "false" ele retorna o valor literal que estiver "false", caso não tenha, retorna o ultimo valor true)
valores "false" no JS = *False, 0, NaN, '',"",``, null, indefined (todos com exceção do false, são FALSY, valores que retornam falso quando necessario qualquer outro valor é true )
|| = true || true = (retorna o primeiro valor "true" literal que localiza)
*/

console.log('nome' && 0 && 'nome2') // retorna *0 por ser avaliado fem false
console.log('nome' && "nome3" && 'nome2') // retorna *nome2 por ser o ultimo valor true

console.log(0 || NaN || "Marlo" || true)// retorna *Marlo por ser o primeiro true que localiza
const corUsuario = null
const corPadrao = "Red"
console.log(corUsuario || corPadrao) //retorna *Red pois o "usuário" não setou uma cor ainda
function saudacao(nome) { //"function" define uma função 
    console.log(`bom dia ${nome}`)
    return 123456 // o valor que a função irá retornar
}

const variavel = saudacao('Marlon')

console.log(variavel) // quando chamado sem um return na function, ira retornar um valor undefined


function saudacao2(nome) {
    return `Bom dia ${nome}!`
}

const variavel2 = saudacao2('Marlon') // esse valor passa a nao retornar nada, pois somente salvou o valor na memoria
console.log(variavel2) //a variavel é quem exibira a function
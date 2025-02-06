/*
Operadoes de comparação
> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a 
== Igualdade (somente checa valor) **nao recomendado - faz uma correção de tipo
===igualdade estrita (checa valor e tipo)
!=diferente (somente checa valor) **nao recomendado - faz uma correção de tipo
!==diferente estrito (checa valor e tipo)
*/ 

console.log(10 > 5) //retorna um boolean, checando um dado *true
const menorque = 10 < 11
console.log(menorque) //*true

const valor1 = 10
const valor2 = "10"
console.log(valor1 == valor2) //*true
console.log(valor1 === valor2) //*false - foi feito a verificação de tipo dos valores
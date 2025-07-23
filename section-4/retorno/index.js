function newPerson(name, lastname) {
  return { name, lastname }
}
const firstPerson = newPerson('Marlon', 'Santos')
console.log(firstPerson, typeof firstPerson)

const secondPerson = {
  name: 'Marlon',
  lastname: 'Santos'
}
console.log(secondPerson, typeof secondPerson)


function criaMultiplicador(mutl) {
  return function (n) {
    return n * mutl
  }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)

console.log(duplica(2))
console.log(triplica(4))

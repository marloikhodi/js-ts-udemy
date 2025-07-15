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

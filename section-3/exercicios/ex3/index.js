function fizzBuzz(num) {
    if (isNaN(num)) {
        return "Número invalido"
    }
    const divisibleThree = (num) => num % 3 === 0
    const divisibleFive = (num) => num % 5 === 0

    if (divisibleFive(num) && divisibleThree(num)) {
        return "FizzBuzz"
    }
    if (divisibleFive(num)) {
        return "Buzz"
    }
    if (divisibleThree(num)) {
        return "fizz"
    } else {
        return "Número não é divisivel por 3 ou 5"
    }
}

let number = 0

while (number <= 100) {
    console.log(number, fizzBuzz(number))
    number++
}
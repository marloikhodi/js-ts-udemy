// IIFE - immediately invoked function expression
// função anonima invocada imediatamente
(function (peso, altura, idade) {
    const sobrenome = 'Marlon'
    function criaNome(nome) {
        return `${nome} ${sobrenome}`
    }
    function falaNome() {
        console.log(criaNome('Deivid'))
    }
    falaNome()

    console.log(peso, altura, idade)
})(80, 1.60, 25)
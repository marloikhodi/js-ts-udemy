// try {
//     console.log(naoExisto) //tentará realizar uma ação que pode acontecer um erro, caso nao consiga, realiza o catch
// } catch (err) {
//     console.log("naoExisto não existe")
//     console.log(err)
// }

function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error(`x ou y precisam ser numeros`)
    }

    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma('x', 2))
} catch (error) {
    console.log(error)
}
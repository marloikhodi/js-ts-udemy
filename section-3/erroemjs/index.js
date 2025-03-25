// try {
//     console.log(naoExisto) //tentará realizar uma ação que pode acontecer um erro, caso nao consiga, realiza o catch
// } catch (err) {
//     console.log("naoExisto não existe")
//     console.log(err)
// }

function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error(`x ou y precisam ser numeros`) //throw(`x ou y precisam ser numeros`) = envia um erro ao JS
        //throw new Error(`x ou y precisam ser numeros`) = envia o erro em formato de "erro padrao JS" 
    }

    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma('x', 2))
} catch (error) {
    console.log(error) //captura e exibe a mensagem de erro conforme o throw
    console.log('de preferencia, exiba algo melhor pro usuário!')
}

//outro exemplo, com o finally{}
try {
    console.log('abre um programa')
    console.log('utiliza o programa')
    console.log('fecha o programa')
} catch (err) {
    console.log('tratamento de erro')
} finally {
    console.log('FINALLY: Executado sempre após') //util quando abre um programa, caso de algum problema, ele é fechado pelo finally
}
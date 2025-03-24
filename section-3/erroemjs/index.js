try {
    console.log(naoExisto) //tentará realizar uma ação que pode acontecer um erro, caso nao consiga, realiza o catch
} catch (err) {
    console.log("naoExisto não existe")
    console.log(err)
}




function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(() => {
        console.log("f1")
        if (callback) callback()
    }, rand());
}
function f2(callback) {
    setTimeout(() => {
        console.log("f2")
        if (callback) callback()
    }, rand());
}
function f3(callback) {
    setTimeout(() => {
        console.log("f3")
        if (callback) callback()
    }, rand());
}

f1(f1callback)

function f1callback() {
    f2(f2callback)
}
function f2callback() {
    f3(f3callback)
}
function f3callback() {
    f3(console.log('Ola Mundo!'))
}
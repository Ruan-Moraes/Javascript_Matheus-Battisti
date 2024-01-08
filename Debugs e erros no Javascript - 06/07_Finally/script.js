let b = 2

try {
    let a = 2 + b
} catch (e) {
    console.log('algo deu errado: ' + e)
    //throw new Error(e)
} finally {
    console.log('Executou')
}
console.log('teste')

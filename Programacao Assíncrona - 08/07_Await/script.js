function somarComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b)
        }, 5 * 1000)
    })
}

async function resSoma(a, b, c) {
    const x = somarComDelay(a, b)
    const y = c

    return (await x) + y
}

resSoma(1, 2, 3).then((value) => console.log(value))

console.log('outros códigos')
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12)
    }, 5 * 1000)
})

const p2 = Promise.resolve(14)

const p3 = new Promise((resolve, reject) => {
    resolve(16)
})

Promise.all([p1, p2, p3]).then((value) => console.log(value))

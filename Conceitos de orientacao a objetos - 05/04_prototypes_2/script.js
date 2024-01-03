const pessoas = {
    maos: 2,
}

// console.log(Object.getPrototypeOf(pessoas))
// console.log(Object.getPrototypeOf(pessoas) === Object.prototype)

// console.log(pessoas.hasOwnProperty('maos'))

const pessoaNova = Object.create(pessoas)

console.log(pessoaNova.maos)

console.log(pessoaNova.hasOwnProperty('maos'))

console.log(Object.getPrototypeOf(pessoaNova) === pessoas)
function potenciaComPow(n1, n2) {
   return Math.pow(n1, n2)
}

function potenciaSemPow(n1, n2) {
    return n1 ** n2
}

console.log(potenciaComPow(2,2))
console.log(potenciaComPow(3,3))

const pComPow = potenciaComPow(2,3)

console.log(pComPow)

console.log('-----------------------------------')

console.log(potenciaSemPow(2, 2))
console.log(potenciaSemPow(3, 3))

const pSemPow = potenciaSemPow(2, 3)

console.log(pSemPow)
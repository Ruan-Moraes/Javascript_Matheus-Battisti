let num = 1
let num2 = 5
let num3 = 7
let num4 = 9

function imprimirNumeros(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
    console.log('[' + args + ']')
}

imprimirNumeros(num, num2, num3)
console.log('---------------------------------------')
imprimirNumeros(num4, num2)
console.log('---------------------------------------')
imprimirNumeros(7, 8, 96, 2, 3, 1, 4, 5, 6, 7, 3)



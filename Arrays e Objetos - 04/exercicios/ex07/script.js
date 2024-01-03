const numbers = [0, 7, 9, 5, 7, 8, 9]

function iterateOverAnArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        console.log(`A soma entre os números do array é ${sum}!`)
    }
}

iterateOverAnArray(numbers)

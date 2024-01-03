let maxNumbers = 7
let numbersDivisions = 0

for (let cont = 0; cont <= 50; cont++) {
    if (maxNumbers % cont == 0) {
        numbersDivisions++
    }
}

if (numbersDivisions == 2) {
    console.log('Número PRIMO')
} else {
    console.log('Número não é PRIMO')
}

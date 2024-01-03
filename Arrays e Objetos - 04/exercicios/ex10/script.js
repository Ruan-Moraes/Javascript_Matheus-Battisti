const calculadora = {
    sum: (number1, number2) => {
        return console.log(
            `A soma entre ${number1} e ${number2} é: ${number1 + number2}`
        )
    },
    subtract: (number1, number2) => {
        return console.log(
            `A subtração entre ${number1} e ${number2} é: ${number1 - number2}`
        )
    },
    multiplication: (number1, number2) => {
        return console.log(
            `A multiplicação entre ${number1} e ${number2} é: ${
                number1 * number2
            }`
        )
    },
    division: (number1, number2) => {
        return console.log(
            `A divisão entre ${number1} e ${number2} é: ${number1 / number2}`
        )
    },
}

calculadora.sum(5, 3)
calculadora.subtract(10, 4)
calculadora.multiplication(7, 2)
calculadora.division(15, 3)

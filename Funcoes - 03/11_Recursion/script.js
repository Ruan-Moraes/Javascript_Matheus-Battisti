function recursao(n) {
    if (n - 1 < 2) {
        console.log('Recursão parou!')
    } else if (n % 2 != 0) {
        console.log('Número Ímpar! ' + n)
        recursao(n - 1)
    } else {
        console.log('Número Par! ' + n)
        recursao(n - 2)
    }
}

recursao(99)
recursao(45)
recursao(199)
recursao(9)

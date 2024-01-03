let num = 73

function numeroPar(n) {
    if (n % 2 == 0) {
        console.log(n + ' É PAR')
        return numeroPar(n - 1)
    } else if (n % 2 == 1) {
        numeroPar(n - 1)
    } else {
        return console.log('Acabou!')
    } 
}

numeroPar(num)

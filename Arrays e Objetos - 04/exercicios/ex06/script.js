const nomes = ['João', 'Anna', 'Ruan', 'Carlos', 'Vitor', 'Jean']
const id = [0, 7, 9, 5]
const nomes2 = ['João', 'Anna', 'Ruan', 'Carlos', 'Vitor', 'Jean']

let cont = 1

function checkTotalInArray(...array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            console.log(
                'Total de items do array é MAIOR que 5! ' + '[' + cont + ']'
            )
        } else {
            console.log(
                'Total de items do array é MENOR que 5! ' + '[' + cont + ']'
            )
        }
        cont += 1
    }
}

checkTotalInArray(nomes, id, nomes2)

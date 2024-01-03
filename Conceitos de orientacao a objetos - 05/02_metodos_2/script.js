const cachorro = {
    raca: 'Sem raça',

    latir: function () {
        console.log('Auuuuuuuuuuu')
    },
    rosnar: function () {
        console.log('grrrrr')
    },
    setRaca: function (raca) {
        this.raca = raca
    },
    getRaca: function () {
        return console.log(`A raça é "${this.raca}".`)
    },
}

console.log(cachorro)
cachorro.latir()
cachorro.rosnar()

cachorro.getRaca()
cachorro.setRaca('Pastor Alemão')
cachorro.getRaca()
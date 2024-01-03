class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir() {
        console.log('Au au!')
    }
}

Cachorro.prototype.raca = 'Sem raça'

let patas = Symbol()

Cachorro.prototype[patas] = 4
Cachorro.prototype.patas = 5

const labrador = new Cachorro('Labrador', 'Amarelo')

console.log(labrador[patas])
console.log(labrador.patas)

labrador.latir()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)

// acessando symbol

console.log(Cachorro.prototype[patas])
console.log(Cachorro.prototype.patas)
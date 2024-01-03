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
Cachorro.prototype.patas = 4

const labrador = new Cachorro('Labrador', 'Amarelo')

console.log(labrador.patas)

labrador.latir()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)

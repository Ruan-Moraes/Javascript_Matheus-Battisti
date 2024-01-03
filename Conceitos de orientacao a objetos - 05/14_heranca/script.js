class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

const coiote = new Mamifero(4)

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas)
        this.raca = raca
    }

    latir() {
        console.log('Au au!')
    }
}

const pug = new Cachorro(4, 'Pug')

console.log(pug.patas)

pug.latir()

console.log(Mamifero)
console.log(coiote)
console.log(pug)
console.log(Cachorro)

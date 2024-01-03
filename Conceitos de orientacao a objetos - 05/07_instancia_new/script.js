function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
    this.uivar = function () {
        console.log('Auuuuuuuuuuu!')
    }
}

const husky = new Cachorro('Husky', 4, 'Cinza')

console.log(husky)

husky.uivar()

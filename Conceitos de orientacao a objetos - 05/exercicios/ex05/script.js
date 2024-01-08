class car {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }

    andar(km) {
        const gasolinaConsumida = km / this.consumo
        this.gasolinaRestante -= gasolinaConsumida 
    }

    abastecer(gasolina) {
        this.gasolinaRestante += gasolina
    }
}

const VW = new car('VW', 'Cinza', 100, 2)

console.log(VW)

VW.andar(100)

console.log(VW)

VW.abastecer(70)

console.log(VW)
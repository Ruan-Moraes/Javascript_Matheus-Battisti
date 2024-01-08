class Conta {
    constructor(saldoCC, saldoCP, taxaJuros) {
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.taxaJuros = taxaJuros
    }

    saque(valor) {
        this.saldoCC -= valor
    }

    depositoCP(valor) {
        this.saldoCP += valor
    }

    transferenciaCC(valor) {
        this.saldoCC += valor
        this.saldoCP -= valor
    }

    transferenciaCP(valor) {
        this.saldoCP += valor
        this.saldoCC -= valor
    }

    calcularJuros() {
        const taxaJuros = (this.saldoCP * this.taxaJuros) / 100
        this.saldoCP += taxaJuros
    }
}

const ruan = new Conta(2000, 5000, 1)

console.log(ruan)

ruan.saque(1000)

console.log(ruan)

ruan.transferenciaCC(2000)

console.log(ruan)

ruan.calcularJuros()

console.log(ruan)

class SuperConta extends Conta {
    constructor(saldoCC, saldoCP, taxaJuros) {
        super(saldoCC, saldoCP, taxaJuros * 2)
    }
}

const superRuan = new SuperConta(6000, 3000, 1)

console.log(superRuan)

superRuan.calcularJuros()

console.log(superRuan)

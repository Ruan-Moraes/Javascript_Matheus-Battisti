class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo
    }

    depositar(value) {
        this.saldo += value
    }

    saque(value) {
        this.saldo -= value
    }
}

const ruan = new ContaBancaria(700)

ruan.saque(300)

console.log(ruan.saldo)

ruan.depositar(600)

console.log(ruan.saldo)

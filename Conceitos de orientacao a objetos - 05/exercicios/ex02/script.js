class Cart {
    constructor(items) {
        this.items = items ? [items] : []
        this.calculateTotals()
    }

    isAnObject(item) {
        return typeof item === 'object'
    }

    isObjectValid(item) {
        return (
            'id' in item &&
            'nameItem' in item &&
            'unitaryValue' in item &&
            'amount' in item &&
            'valueTotalOfItems' in item
        )
    }

    isItemRepeated(item) {
        return this.items.some((cartItem) => cartItem.id === item.id)
    }

    increaseQuantityOfItens(item) {
        let found = false

        for (let index = 0; index < this.items.length; index++) {
            if (this.items[index].id === item.id) {
                found = true
                this.items[index].amount += 1
                this.items[index].valueTotalOfItems =
                    this.items[index].unitaryValue * this.items[index].amount
                break
            }
        }

        if (!found) {
            this.items.push({
                id: item.id,
                nameItem: item.nameItem,
                unitaryValue: item.unitaryValue,
                amount: 1,
                valueTotalOfItems: item.unitaryValue,
            })
        }

        this.calculateTotals()
    }

    calculateTotals() {
        this.totalValue = this.items.reduce(
            (total, item) => total + item.valueTotalOfItems,
            0
        )
        this.totalItems = this.items.reduce(
            (total, item) => total + item.amount,
            0
        )
    }

    addItemInCart(item) {
        const isObject = this.isAnObject(item)
        const isObjectValid = this.isObjectValid(item)
        const isItemRepeated = this.isItemRepeated(item)

        if (isObject && isObjectValid) {
            if (isItemRepeated) {
                this.increaseQuantityOfItens(item)
            } else {
                this.items.push(item)
                this.calculateTotals() // Recalculate totals after adding a new item
            }
        } else {
            console.log('ERROR AO ADICIONAR PRODUTO!')
        }
    }
    
    removeItemFromCart(itemId) {
        this.items = this.items.filter((item) => item.id !== itemId)
        this.calculateTotals()
    }
}

console.log('--- Instância criada! ---')

const ruanMoraes = new Cart({
    id: 1,
    nameItem: 'PC',
    unitaryValue: 4000,
    amount: 1,
    valueTotalOfItems: 4000,
})

ruanMoraes.addItemInCart({
    id: 2,
    nameItem: 'Mouse',
    unitaryValue: 200,
    amount: 1,
    valueTotalOfItems: 200,
})

console.log(ruanMoraes)

ruanMoraes.addItemInCart({
    id: 3,
    nameItem: 'teclado',
    unitaryValue: 400,
    amount: 1,
    valueTotalOfItems: 200,
})

ruanMoraes.addItemInCart({
    id: 3,
    nameItem: 'teclado',
    unitaryValue: 400,
    amount: 1,
    valueTotalOfItems: 400,
})

console.log(ruanMoraes)

ruanMoraes.addItemInCart({
    id: 4,
    nameItem: 'Outros',
    unitaryValue: 800,
    amount: 2,
    valueTotalOfItems: 1600,
})

console.log(ruanMoraes)

ruanMoraes.removeItemFromCart(4)

console.log(ruanMoraes)

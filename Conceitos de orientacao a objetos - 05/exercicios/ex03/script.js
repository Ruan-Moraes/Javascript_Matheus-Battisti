class Address {
    constructor(road, neighborhood, city, state) {
        this.road = road;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
    }

    set updateRoad(road) {
        this.road = road;
    }

    set updateNeighborhood(neighborhood) {
        this.neighborhood = neighborhood;
    }

    set updateCity(city) {
        this.city = city;
    }

    set updateState(state) {
        this.state = state;
    }

    updateAll(road, neighborhood, city, state) {
        this.road = road;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
    }
}

const addressRuan = new Address('Rua Rose', 'Joaquim', 'Belo Horizonte', 'Minas Gerais');

console.log(addressRuan);

addressRuan.updateCity('Ribeirão das Neves')

console.log(addressRuan)
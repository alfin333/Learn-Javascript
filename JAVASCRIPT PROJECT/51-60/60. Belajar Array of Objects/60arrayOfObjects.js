class Car {

    constructor(model, year, color) {
        this.model = model,
            this.year = year,
            this.color = color
    }
    drive() {
        console.log(`You drive ${this.model}`);
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");
const car4 = new Car("Ferari", 2022, "blue");
const car5 = new Car("Audi", 2022, "white");

const cars = [car1, car2, car3, car4, car5];
console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);
console.log(``);
displayInfo(cars[0])
console.log(``);
startRace(cars)

function startRace(objects) {
    console.log(`3...2...1...GO!`);
    for (const car of objects) {
        car.drive();
    }
}
function displayInfo(object) {
    console.log(object.model);
    console.log(object.year);
    console.log(object.color);
}
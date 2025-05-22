// Inheritance =    a child class can inherit all the
//                  methods and properties from another class

class Rabbit {
    alive = true;
    name = "Rabbit";
    constructor() {
        console.log(`${this.name} Spawned, This is why we need inheritance`)
    }
    eat() {
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
    run() {
        console.log(`This ${this.name} is running`)
    }
}
class Fish {
    alive = true;
    name = "Fish";
    constructor() {
        console.log(`${this.name} Spawned, This is why we need inheritance`)
    }
    eat() {
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
    swim() {
        console.log(`This ${this.name} is swimming`)
    }
}
class Hawk {
    alive = true;
    name = "Hawk";
    constructor() {
        console.log(`${this.name} Spawned, This is why we need inheritance`)
    }
    eat() {
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
    fly() {
        console.log(`This ${this.name} is flying`)
    }
}

hawk = new Hawk();
rabbit = new Rabbit();
Fish = new Fish();
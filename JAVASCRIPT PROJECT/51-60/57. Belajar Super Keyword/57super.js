// super =  Refers to the parent class.
//          Commonly used to invoke Constructor of parent class

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log(`${this.name} Spawned`)
    }

}

class Rabbit extends Animal {
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Rabbit", 5, 30);
const fish = new Fish("Fish", 2, 26);
const hawk = new Hawk("Hawk", 25, 100);

showPropertiesMethods(rabbit);
console.log("Run Speed:",rabbit.runSpeed)
showPropertiesMethods(fish);
console.log("Swim Speed:",fish.swimSpeed)
showPropertiesMethods(hawk);
console.log("Fly Speed:",hawk.flySpeed)


function showPropertiesMethods(object){
    console.log(`${object.name}`);
    console.log(`Age: ${object.age}`);
}

// intinya super Constructor ini untuk constructor yang umum 
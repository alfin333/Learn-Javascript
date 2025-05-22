// Inheritance =    a child class can inherit all the
//                  methods and properties from another class

// Warning! = run the "whyNeedInheritance" Folder first before understanding this

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal {
    name = "Rabbit";


    run() {
        console.log(`This ${this.name} is running`)
    }
}
class Fish extends Animal {
    name = "Fish";


    swim() {
        console.log(`This ${this.name} is swimming`)
    }
}
class Hawk extends Animal {
    name = "Hawk";

    fly() {
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

showPropertiesMethods(rabbit);
rabbit.run()
showPropertiesMethods(fish);
fish.swim()
showPropertiesMethods(hawk);
hawk.fly()


function showPropertiesMethods(object){
    console.log(`${object.name}`);
    console.log(`${object.alive}`);
    object.eat();
    object.sleep();
}

// intinya gk perlu ngulang bikin method atau property yang sama kalau inherit itu 
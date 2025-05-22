class Car{

    constructor(model, year, color){
        this.model = model,
        this.year = year,
        this.color = color
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");
displayInfo(car1)
changeProperty(car1, "color", "black")
console.log(`car1 Color after change: ${car1.color}`)
changeProperty(car1, "year", 2020)
console.log(`car1 Year after change: ${car1.year}`)
console.log(``);
displayInfo(car1)
console.log(``);
displayInfo(car2);
console.log(``);
displayInfo(car3);


function changeProperty(object, property, value){
    if(property == "model"){
        return object.model = value;
    }
    else if(property == "year"){
        return object.year = value;
    }
    if(property == "color"){
        return object.color = value;
    }
}

function displayInfo(object){
    console.log(object.model);
    console.log(object.year);
    console.log(object.color);
}
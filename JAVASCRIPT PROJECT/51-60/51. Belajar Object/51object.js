// Object = A group of properties methods
//          Properties = what an object has
//          Methods = what an object can do
//          use . to access properties/methods

const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: () => console.log("You drive the car"),
    brake: () => console.log("You step on the brakes"),

}
const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive: () => console.log("You drive the car"),
    brake: () => console.log("You step on the brakes"),

}
showPropertiesandMethods(car1)
console.log(``)
showPropertiesandMethods(car2)


function showPropertiesandMethods(someCar) {
    console.log(someCar.model);
    console.log(someCar.color);
    console.log(someCar.year);
    someCar.drive()
    someCar.brake()
}

// variabel didalam object namanya properties
// function didalam object namanmya method
// jika ingin menampilkan properties gunakan namaObject.properties
// jika ingin menggunakan methods gunakan namaObject.methods
// intinya jika ingin mengakses, gunakan titik .
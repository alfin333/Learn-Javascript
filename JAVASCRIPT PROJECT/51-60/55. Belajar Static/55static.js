// Static = belongs to the class, not the objects
//          properties: useful for caches, fixed-configuration
//          Methods: useful for utility function
//          It's Class level, not instance level

class Car{
    static numberOfCars = 0; // properti static
    constructor(model){
        this.model = model; // properti instance
        Car.numberOfCars += 1; // update jumlah mobil
    }
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const carSatu = new Car("Mustang")
const carDua = new Car("Corvette")
const carTiga = new Car("BMW")

console.log(Car.numberOfCars);
Car.startRace();
// numberOfCars akan menyesuaikan jumlah objek Car yang dibuat
// karena properti itu berada di level kelas, bukan objek individual
// fungsi utilitas: membantu/melayani proses umum yang bisa dipakai berulang kali

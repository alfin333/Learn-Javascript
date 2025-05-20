// This =   reference a particular object 
//          the object depends on the immediate context


const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function (){ 
        console.log(`You drive the ${this.model}`);
    }
}
const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive: function (){ 
        console.log(`You drive the ${this.model}`);
    }

}
car1.drive(); // Pada method drive tiap object, coba kalian hilangkan
              // keyword this, kalian pasti akan paham mengapa
              // perlu keyword this
car2.drive();
// intinya this itu dipakai untuk refer ke properties object yang saat ini
this.name = "alfin" // ini sama aja kaya window.name
console.log(this); //pasti outputnya adalah Window karena ini adalah 
                   // immediate contextnya si window

// FYI = window adalah object yang merujuk pada satu jendela (tab)
// browser tempat javascript dijalankan
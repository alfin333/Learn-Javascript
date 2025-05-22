// get =    binds an object property to a function 
//          when that property is accessed
// set =    binds an object property to a function 
//          when that propperty is assigned a value

class Car{
    constructor(power){
        this._power = power;
        this._gas = 25;
    }
    get power(){
        return `${this._power} HP`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`
    }
    set gas(value){
        if(value > 50){
            this._gas = 50
        }
        else if(value < 0){
            this._gas = 0
        }
    }
}

let carSatu = new Car(50);
carSatu.power = 1250 // property power tidak akan bisa diubah (read-only) 
// karena sudah menjadi getter
//carSatu._power = 10000000 // namun property dapat diubah 
// jika langsung mengakses property pakai _ 
console.log(`Tidak ada perubahan walau diganti menjadi 1250: ${carSatu.power}`);
carSatu.gas = 35
console.log(carSatu.gas);
carSatu.gas = 5000000
console.log(`gas setelah diganti menjadi 500000: ${carSatu.gas}`);

// get digunakan untuk mengakses properti seolah itu property biasa, tapi sebenarnya menjalankan fungsi.
// set digunakan untuk menetapkan nilai ke properti, tapi bisa disisipi logika validasi/modifikasi.
// Properti power jadi read-only karena kamu hanya membuat getter tanpa setter.
// carSatu.power = 5000 tidak akan mengubah _power, karena tidak ada setter untuk power.
// carSatu._power = 10000000 akan berhasil, karena kamu langsung akses field-nya.


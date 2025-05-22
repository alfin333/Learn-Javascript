// Constructor =    a special method of a class,
//                  accept arguments and assign properties

class Student{
    constructor(nama, umur, ipk){
        this.nama = nama;
        this.umur = umur;
        this.ipk = ipk;
        // this.study();
    }
    study(){
        console.log(`${this.nama} is studying`)
    }
}
const studentSatu = new Student("alfin", 22, 3.9);
const studentDua = new Student("nasywan", 21, 4);
const studentTiga = new Student("kevin", 25, 4);

showPropertiesMethods(studentSatu);
showPropertiesMethods(studentDua);
showPropertiesMethods(studentTiga);
function showPropertiesMethods(object){
    console.log(`${object.nama}`);
    console.log(`${object.umur}`);
    console.log(`${object.ipk}`);
    object.study();
    console.log(``);
}

// intinya constructor berguna untuk langsung mengisi 
// nilai properti saat object dibuat,
// atau mungkin langsung menjalankan suatu method saat object dibuat
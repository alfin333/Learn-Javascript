// array.map() =    execute a provided callback function 
//                  once for each array element 
//                  AND creates a new array

let numbers = [1, 2, 3, 4, 5];
square = numbers.map(square);
cube = numbers.map(cube);
square.forEach(print);
console.log(``);
cube.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}

function print(element){
    console.log(element)
}

//.map() digunakan untuk:
// Menjalankan fungsi untuk setiap elemen array
// Mengembalikan array baru berisi hasil dari setiap pemanggilan fungsi 
// Tidak mengubah array asli


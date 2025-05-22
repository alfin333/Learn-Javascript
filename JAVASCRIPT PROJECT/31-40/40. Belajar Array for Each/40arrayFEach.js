//array.forEach() = executes a provided callback function
//                  once for each array element

let students = ["alfin", "gilang", "adit"];
students.forEach(capitalize)
students.forEach(print)
// intinya di foreach ini, argumen callback function itu secara urutannya
// element, index, array
function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
    // kalian bisa coba ubah argumen substring untuk memahami cara kerjanya
    // intinya ini agar huruf pertama kapital
}
function print(element){
    console.log("ini function print: ",element);
}
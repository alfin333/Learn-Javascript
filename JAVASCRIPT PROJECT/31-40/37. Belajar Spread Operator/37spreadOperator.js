// Spread Operator =    allows an iterable such as an 
// ...                    array or string to be expanded 
//                      in places where are zero or more 
//                      arguments are expected 
//                      (unpack the element) 

let name = "alfin"
console.log(...name)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// why its useful?
let maximum = Math.max(numbers);
console.log('Hasilnya akan NaN karena tidak memakai spread operator:', maximum)
maximum = Math.max(...numbers);
console.log('Jika pakai spread operator:', maximum) 
// intinya cocok untuk array 

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2) //intinya untuk unpack array, coba pakai spread dan tidak pakai spread operator disini
console.log(class1) // dan coba pakai spread dan tidak pakai spread operator disini
//intinya untuk unpack array

// Spread operator digunakan untuk menambahkan semua elemen class2 ke dalam class1.
// Tanpa spread, class1.push(class2) akan menambahkan array class2 sebagai satu elemen nested.
// Dengan spread, semua elemen dari class2 akan di-"unpack" menjadi elemen individual.

//class1.push(class2); // → class1 = ["Spongebob", "Patrick", "Sandy", ["Squidward", "Mr.Krabs", "Plankton"]]
//class1.push(...class2); // → class1 = ["Spongebob", "Patrick", "Sandy", "Squidward", "Mr.Krabs", "Plankton"]

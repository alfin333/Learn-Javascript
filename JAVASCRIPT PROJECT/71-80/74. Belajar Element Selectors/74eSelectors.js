/*
let element = document.getElementById('myTitle');
element.style.backgroundColor = "lightGreen";
*/

let fruits = document.getElementsByName("fruits");
// console.log(fruits);
console.log(fruits[1]);

fruits.forEach(fruit =>{
    if(fruit.checked){
        console.log(fruit.value);
    }
})

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";

let desserts = document.getElementsByClassName("desserts");
desserts[1].style.backgroundColor = "lightblue";

let element = document.querySelector("[for]");
element.style.backgroundColor = "pink";

let elements = document.querySelectorAll(""); // coba isi misalnya #li, .desserts, [for]
elements.forEach(element => {
    element.style.backgroundColor = "grey";
})

//informasi lebih detail untuk cara query bisa cek di gambar pada directory ini
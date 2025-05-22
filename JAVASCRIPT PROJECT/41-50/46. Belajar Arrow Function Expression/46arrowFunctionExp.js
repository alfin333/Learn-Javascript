// arrow function = compact alternative to a traditional function expression
// =>

const greeting = userName => console.log(`hello ${userName}`); // jika argument 1, gk perlu ()
greeting("Alfin")

const percent = (x,y) => x / y * 100;   // kalau kamu kasih curly braces {} bisa undefined
                                       // agar tidak undefined harus return pada {}
console.log(`${percent(60,100)}%`)

let grades = [100, 50, 90, 60, 80, 70];
grades.sort((x,y) => x-y)       // sebenarnya callback bisa kita gunakan function expression
grades.forEach(element => console.log(element)) // seperti function (){} atau arrow function
                                // itu berlaku selama dia callback


// function descending (x,y) {
//     return x - y;
// }
// function print(element){
//     console.log(element);
// }

// const percent1 = function (x, y) {
//     return x / y * 100
// }

// const greeting1 = function(userName){
//     console.log(`hello ${userName}`)
// }


let a = 1
let b = 2
let array = [3,3,5]
console.log(calculation(a,b, ...array)); // Spread Operator

function calculation (x, y, ...numbers){ // Rest Parameters
    let total = 0;
    let times = x*y;
    for (let number of numbers){
        total += number
    }
    return times+total;
}
// ternary operator =   Shortcut for an 'if/else statement' 
//                      Takes 3 operands 

//                      1. a condition with ? 
//                      2. expression if True : 
//                      3. expression if False


let adult = checkAge(17);
console.log(adult)

function checkAge(age){
    // condition ? exprIfTrue : exprIfFalse
    return age >= 18? true: false
}
// function checkAge(age){
//     if (age >= 18 ){
//         return true;
//     }
//     else{
//         return false
//     }
// }

checkWinner(true)
function checkWinner(win){
    win ? console.log(`You WIN!`) : console.log(`You Lose!`);
}
// literally a shortcut of if/else statement
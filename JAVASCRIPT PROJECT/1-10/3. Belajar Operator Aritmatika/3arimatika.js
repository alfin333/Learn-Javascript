// arithmetic operator =    opperands (values, variables, etc.)
//                          operators (+ - * /)
//                          ex. 11 = x + 5

let students = 30;
studentsPlus = students + 1;
studentsMin = students - 1;
studentsTimes = students * 2;
studentsDivide = students / 3;
studentsPow = students ** 2;
let extraStudents = students % 2;

console.log(`Ini ditambah ${studentsPlus} (+)`);
console.log(`Ini dikurang ${studentsMin} (-)`);
console.log(`Ini dikali ${studentsTimes} (*)`);
console.log(`Ini dibagi ${studentsDivide} (/)`);
console.log(`Ini dipangkatkan ${studentsPow} (**)`);
console.log(`Ini modulus ${extraStudents} (%)`);

// AUGMENTED OPERATION
//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;

/*
operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/
let result = 1 + 2 * 3 + 4 ** 2 //23
console.log(result)
let result2 = 12 % 2 + 8 / 2 //6
console.log(result2)

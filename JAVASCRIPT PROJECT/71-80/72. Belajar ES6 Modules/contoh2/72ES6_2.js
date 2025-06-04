// The idea behind a module is that it's a file of reusable code
// We can import sections of pre-written code to use whenever we want
// Great for any general utility values and functions
// Helps to make your code more reusable and maintanable
// Think of modules as separate chapters of a book

import * as math_util from "../math_util.js"

console.log(`Ini memakai math_util, PI: ${math_util.PI}`);

let circumference = math_util.getCircumference(10);
console.log(`Ini memakai math_util, Keliling: ${circumference}`);

let area = math_util.getArea(10);
console.log(`Ini memakai math_util, Area: ${area}`);
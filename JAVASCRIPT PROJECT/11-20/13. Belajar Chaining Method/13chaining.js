//  method chaining =   calling one method after another
//                      in one contionous line of code

let name = `alfin`;

let letter = name.charAt(0);
letter = letter.toUpperCase();

console.log(letter); // nah ini sebenernya kurang elegan, bisa kaya gini:
letter = name.charAt(0).toUpperCase().trim(); // 1 line code ada continous method
//  slice() extracts a section of a string
//  and returns it as new string,
//  without modifying the original string

let fullName = "Muhammad Alfin";
let lastName = "";
let firstName = "";

lastName = fullName.slice(9)
console.log(lastName)
firstName = fullName.slice(0,8)
console.log(firstName)

lastName = fullName.slice(fullName.indexOf(" ")+1) // ini dia ngambil index spasi, kalau gk di +1 spasinya jadi ngikut
console.log(lastName)
firstNameName = fullName.slice(0,fullName.indexOf(" ")) //mulai dari index 0
console.log(firstName)
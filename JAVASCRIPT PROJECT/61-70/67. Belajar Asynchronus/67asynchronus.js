// synchronus code =    In an ordered sequence. 
//                      Step-by-step linear instructions 
//                      (start now, finish now)

// asynchronus code =   Out of sequence. 
//                      Ex. 
//                          Access a database 
//                          Fetch a file
//                          Tasks that take time 
//                          (start now, finish sometime later)

// Synchronus
console.log(`START`)
console.log(`This step is Synchronus`)
console.log(`END`)
console.log(``)
console.log(`START`)
setTimeout(() => console.log(`This step is Asynchronus`), 5000)
console.log(`END`)
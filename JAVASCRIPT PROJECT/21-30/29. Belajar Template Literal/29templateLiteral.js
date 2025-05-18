// Template Literal =   delimited with (`) 
//                      instead of double or single quotes 
//                      allows embedded variables and expression

let name = "Alfin";
let items = 3;
let total = 75;

let text = `Hello ${name} <br>
You have ${items} items in your <br>
Your total is ${total}`;

document.getElementById(`myLabel`).innerHTML = text
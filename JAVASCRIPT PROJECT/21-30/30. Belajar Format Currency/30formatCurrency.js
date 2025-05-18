// toLocaleString() =   returns a string with a language 
//                      sensitive representation of this number

// number.toLocaleString(locale, {options});
// 'locale' = specify that language (undefined = default set in default browser)
// 'options' = object with formatting options

let myNum = 123456.789
let myNum1 = myNum.toLocaleString("id-ID"); // Indonesia standart
let myNum2 = myNum.toLocaleString("hi-IN"); // Hindi
let myNum3 = myNum.toLocaleString("en-US"); // US English 
console.log(myNum1);

let myNum4 = myNum.toLocaleString("id-ID", {style: "currency", currency: "IDR"})
let myNum5 = myNum.toLocaleString("id-ID", {style: "currency", currency: "USD"}) // bakal ada US karena id-ID bukannya en-US
let myNum6 = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"}) // bakal ada US karena id-ID bukannya en-US
console.log(myNum6);

let percent = .05
let myPercent = percent.toLocaleString(undefined, {style: "percent"});
console.log(myPercent)

let unit = 10.8
let myUnit = unit.toLocaleString(undefined, {style: "unit", unit: "celsius"});
console.log(myUnit)

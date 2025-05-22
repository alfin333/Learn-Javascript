let fruits = ["banana", "apple", "orange", "mango"];

//fruits = fruits.sort()
fruits = fruits.sort().reverse()

//console.log(fruits) // ini langsung kasih tau semua detail arraynya kaya length, isinya dll
for(let fruit of fruits){
    console.log(fruit);
}
// 2D array = An array of arrays
// simpan array di dalam array

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];
//let labels = ["Fruits", "Vegetables", "Meats"]

let groceryLists = [fruits, vegetables, meats];
groceryLists[2][0] = "steak"; // ubah eggs jadi steak

for (lists of groceryLists) {
    console.log("New List: ", lists)
    for (food of lists) {
        console.log("New Food: ", food)
    }
}

// for (let i = 0; i <= groceryLists.length - 1 ; i++){
//     console.log(labels[i], ":");
//     for (let y = 0; y<=groceryLists[i].length - 1; y++){
//         console.log("- ",groceryLists[i][y]);
//     }
// }
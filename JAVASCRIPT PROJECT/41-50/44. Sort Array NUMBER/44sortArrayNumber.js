let grades = [100,50,80,70,60,90];

grades = grades.sort(ascendingSort);

grades.forEach(print);

function descendingSort (x,y){
    return y-x
}
function ascendingSort (x,y){
    return x-y
}
function print(element){
    console.log(element);
}

let arr = [3, 1, 2];

arr.sort((a, b) => {
  console.log(`compare ${a} and ${b}`);
  return a - b;
});

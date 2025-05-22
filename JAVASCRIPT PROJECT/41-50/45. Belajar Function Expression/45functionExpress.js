// function expression =    function without a name (anonymous function) 
//                          avoid polluting the global scope with names 
//                          Write it, then forget about it

count = 0
label = document.getElementById("myLabel")
document.getElementById("increaseBtn").onclick = function (){
    count+=1;
    label.innerHTML = count;
}
document.getElementById("decreaseBtn").onclick = function (){
    count-=1;
    label.innerHTML = count;
}
const greeting = function(){
    console.log("Hello ini adalah anonymous Function!")
}

// intinya anonymous function itu function yang disimpen ke variable, tanpa diberikan nama,
// callback =   a function passed as an argument
//              to another function.


sum(2, 3, showLabel); //bisa pilih showconsole atau showlabel, bebas coba coba saja

function sum(x, y, doSomething){
    total = x + y;
    doSomething(total);
}

function showConsole(result){
    console.log(result);
}

function showLabel(result){
    document.getElementById("myLabel").innerHTML = "<h1>"+result+"</h1>";
}

// mereka tidak return melainkan melakukan side-effect
// Side effect = tindakan yang mempengaruhi hal di luar fungsi itu sendiri, misalnya:
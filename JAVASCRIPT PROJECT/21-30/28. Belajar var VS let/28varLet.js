// Variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to function (){}

// global variable = is declared outside any function
// (if global variable, is var instead of let. it will change browser's window properties, 
// check the example at very bottom)
function test() {
    if (true) {
        var a = 10;
        let b = 20;
    }
    console.log(a); // ✅ OK, karena var punya function scope
    //console.log(b); // ❌ Error, karena let hanya hidup di dalam block {}
}

test();

var name = "anjayani"
// cek gambar di folder ini, property window yang name, terganti dari "" menjadi "anjayani"
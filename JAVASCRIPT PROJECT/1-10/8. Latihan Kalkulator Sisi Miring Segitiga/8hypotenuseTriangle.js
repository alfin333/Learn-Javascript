let a;
let b;
let c;



b = Number(b);

// c = Math.pow(a,2) + Math.pow(b,2);
// c = Math.sqrt(c);
document.getElementById("myButton").onclick = function() {
    a = document.getElementById("aText").value;
    a = Number(a);
    b = document.getElementById("bText").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById(`cLabel`).innerHTML = `Hasilnya ` + c;

}
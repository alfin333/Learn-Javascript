// For loops =  repeat code 
//              a certain amount of times

for (let x = 10; x > 0; x -= 1) {
    console.log(x);
}

let totalbaris = 10;
for (let i = 1; i < totalbaris; i += 1) {
    let spasi = '';
    let bintang = '';
    for (let a = 1; a <= totalbaris - i ; a++ ){
        spasi += " ";
    }
    for (let y = 1; y <= (2*i-1); y += 1) {
        bintang += `*`;
    }
    console.log(spasi,bintang);
}
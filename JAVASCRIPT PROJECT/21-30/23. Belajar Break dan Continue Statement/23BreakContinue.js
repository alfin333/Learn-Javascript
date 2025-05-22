// break = break out loop entirely
// continue = skip an iteration of a loop

for(let i = 1; i <= 30; i++){
    if (i == 10){
        break;
    }
    console.log(i);
}
// kalau break itu untuk menghentikan looping

console.log(``)

for(let i = 1; i <= 30; i++){
    if (i == 10){
        continue;
    }
    console.log(i);
}
// kalo continue itu akan skip program setelah continue 
// dan akan dilanjutkan ke iterasi selanjutnya, 
// dalam hal ini console.log(10) tidak akan dieksekusi 
// dan langsung lanjut ke i = 11
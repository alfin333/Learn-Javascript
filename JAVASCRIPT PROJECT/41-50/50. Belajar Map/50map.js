// Map = Object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt",20],
    ["jeans",30],
    ["socks",10],
    ["underwear",50]
]);

shoppingCart = 0;
shoppingCart += store.get("t-shirt");
shoppingCart += store.get("jeans");
console.log(`Total harga belanja: ${shoppingCart}, ini pakai method .get()`)

store.set("hat", 40) // menambah data baru pada map
store.delete("socks")
console.log(`kita memiliki socks: ${store.has(`socks`)}, karena pakai method .delete()`)
console.log(`Ukuran Map: ${store.size}, pakai method .size()`)
store.forEach((value, key) => console.log(`${key} $${value}`));

// .get(key)     = Mengambil nilai (value) dari Map berdasarkan key
// .set(key, val)= Menambahkan atau mengubah data pada Map
// .delete(key)  = Menghapus data dari Map berdasarkan key
// .has(key)     = Mengecek apakah key tertentu ada di dalam Map
// .size         = Menunjukkan jumlah total pasangan key-value dalam Map
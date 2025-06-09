let element = document.querySelector("#dessert");
console.log(element)

let child = element.previousElementSibling;
child.style.backgroundColor = "lightgreen"

let elements = document.querySelector("#fruit");
console.log(elements)

let children = Array.from(elements.children);
children.forEach(child => {
    child.style.backgroundColor = "pink"
})

//.firstElementChild
//.lastElementChild
//.parentElement
//.nextElementSibling
//.previousElementSibling
//.children[]
//Array.from(.children)

//KESIMPULAN: kalian bisa coba coba sendiri querynya, 
// jika kita milih #fruits dan pilih firstElemenChild
// otomatis dia akan cari child elemen pada id fruits, dalam hal ini
// child elementnya adalah si <li>banana</li>
// kalau kita pilih document.body, lastElementChild nya kemungkinan si <script>

// https://www.youtube.com/watch?v=080xF4VDvjw&list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1&index=75
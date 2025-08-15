console.log(document.title);
console.log("my first is connected")
console.log(document.body);
console.log(document.form);
console.log(document.link);


let heading = document.getElementById("heading")
heading.textContent ="Welcome to MWF"
heading.style.color = "blue"
console.log(heading)

let header =document.getElementById("first")
header.innerHTML = "<h2>For Quality Furniture Products</h2>"


// Events


// More DOM methods
document.getElementByTagName()
document.getElementByClassName()
document.querySelector() //this works exactly like CSS
document.querySelectorAll() //this works like CSS but captures everything


document.createElement()

// What are Events?
// An event is a triggered action by a user or browser which can result into signals, notification etc

// Key words used in Events
// 1. Event listenig :click = (buttons area always watching/listening to the event)
// 2. Event handling :Is that function that happens after listening.

let button = document.getElementById("btn");  //Yhis line is for selecting a button

button.addEventListener("click",function(){     //this line is for adding a function to the button
window.alert("You have clicked a button");
})

let price = document.getElementById("price").value;
let qty = document.getElementById("qty").value;
let total = document.getElementById("total");
let calcbtn = document.getElementById("calcbtn");


function updateTotal(){
    let cost = Number(price) * Number(qty);
    cost.toLocaleString();
    total.textContent = cost = total: UGX  $cost 
    return;
};
calcbtn.addEventListrner("click", updateTotal)
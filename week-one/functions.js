// //write a fuction
// function functionName() {
//     //write any code here
//     //return
//     //console.log
// }

// //call the function to do its work
// functionName()

// function functionName(parameter) {
//     //write any code here
//     //return
//     //console.log
// }
// functionName(arguments)

// function addTwoNumbers() {
// let x = 1;
// let y = 3;
// let sum = x+y;
// console.log(sum);
// return sum
// }

// console.log(addTwoNumbers())
// function addTwoNumbers(x,y) {
//     let sum = x+y;
//     return sum;
// }
// console.log(addTwoNumbers(7,7))
// console.log(addTwoNumbers(7,9))
// console.log(addTwoNumbers(7,5))

// //write a function to square any number
// function squareAnyNumber(x) {
//     return x*x;
// }
// console.log(squareAnyNumber(2));
// console.log(squareAnyNumber(3));
// console.log(squareAnyNumber(4));
// console.log(squareAnyNumber(5));

//calculating total cost
// function calculateTotalCost(quantity,unitPrice) {
//  const transportFee = 5000
// let subTotalCost = quantity * unitPrice 
// let total = subTotalCost + transportFee
// return total
// }
// console.log(calculateTotalCost(2,350000));



// let totalBeforeVat = calculateTotalCost(2,350000);
// function calculatePriceAfterTax(total){
//     const vat = 0.18
//     let vatFee = total * vat
//     let priceAfterTax = total - vatFee
//     return {priceAfterTax, vatFee};
// }
// console.log(calculatePriceAfterTax(totalBeforeVat))

//Functions with strings

// function printFullName(){
//  let firstName = "Wadada";
// let lastName = "Hilda";
// let space = " "
// let fullName = firstName + space +  lastName
// return fullName
// }
// console.log(printFullName())

// //fuctions with arrays
// let actions = [function greet(){
//     console.log('hello')
// },
// function calculate(){
//     console.log(1 + 1)
// },
// function thankYou(){
//     console.log('thank you for using our system')
// }]

// actions[0]();
// actions[1]();
// actions[2]();
// console.log(actions)

// let unitPrice
// let quantity
// let address
// let productName
// let transportFee
// let vatFee
// let paymentMethod
// let calculateSubTotal
// let calculateUnitPrice


// let order = {
//     unitPrice: 500000,
//     quantity: 3,
//     calculateSubTotal: function(){
//         return this.unitPrice * this.quantity
//     }
// }
// order.unitPrice
// order.quantity
// order.calculateSubTotal()

// let car = {
//     name: "rangerover",
//     weight: 1000,
//     start: function(){
//         return 'vroom'
//     }
// }

// car.name
// car.weight
// car.start()

// console.log(car.name + car.weight)

// let firstName = "Maranatha"

// let ben ={
//     weight: 49,
//     age: 20,
//     firstName: "Benjamin",
//     walk: function(){
//         return this.firstName + ' is walking'
//     }
// }
// console.log(ben.walk())
// console.log(this)
// //why is it not good to use arrow functions in object method definations?

// let martin ={
//     weight: 49,
//     age: 20,
//     firstName: "Martin",
//     walk: function(){
//         return this.firstName + ' is walking'
//     }
// }
// console.log(martin.walk())

//no.1 model a phone object 
//with properties;color,size,type
//with methods;take picture, play music, ring
//create 2 phone objects sumsang and iphone
//display the properties of the phone objects
//call the different methods of the phone objects


//no.2 model a user object 
//with properties;email, username, gender
//with methods;login, logout
//create 2 user objects Bob, Alice
//display the properties of the user objects
//call the different methods of the user objects

//answers
//no.1
let phone = {
color:"blue",
size:"500tn",
type:"samsungUltra",

takePicture: function(){
    return this.type + 'snap'; 
},
playMusic: function(){
    return this.type + ' play + pause'
},
ring: function(){
    return this.type + ' sound + vibrate'
}
}

console.log(phone.takePicture())
console.log(phone.playMusic())
console.log(phone.ring())


let sumsung = {
color: "black",
size: "large",
type: "ultra",

takePicture: function(){
    return this.type + ' snap'
}
}
console.log(sumsung.takePicture())

let dada = {
    email: "wadadahilda@gmail.com",
    username: "hildada",
    gender: "female",

    login:function(){
        return this.username && ' Welcome' 
    },
}
console.log(dada.login())







/**
 *If statement
 *If else statement
 *If else if else satement
 *Switch statement
 *Tenary statement
 *If statemate with logical operators in conditions
 */

// Types of control flow statement
/**
 *loops intergraion/repeating statements
 *1. for loop
 *2. whileloop
 *3. do while loop
 */

// Exceptional handling
/**
 * Debugging
 * try  catch
 */

// Transfer control
/**
 * return
 * break
 * continue
 */
// Write an if statement to show if someone is an adult is allowed to vote

// let age = prompt("Please Enter Your Age:");
// age = Number(age);
// if (age >= 18) {
//   window.alert("Adult can Vote");
// } else {
//   window.alert("You are a minor you cant Vote!");
// }

// switch (expression) {
//   case value1:
//     //write code - when expression === value1
//     break;
//   case value2:
//     //write code - when expression === value2
//     break;
//   case value3:
//     //write code - when expression === value3
//     break;
//   default:
//   //write code - code of the matches
// }

let paymentType = prompt("Enter Payment Method: (Cash, Mobile Money, Bank)")

switch(paymentType){
  case "Cash":
    window.alert("Process cash payment at the counter")
    //write code - when expression === value1
    break;
    case "Mobile Money":
      window.alert("Verify your payment details ")
      //write code - when expression === value2
      break;
      case "Bank":
        window.alert("I don't want")
        //write code - when expression === value3
        break;
        default:
          window.alert("Unkown method please check again")
          //write code - code of the matches
}

// let product = prompt("Store in : (Wood, Furniture)")

// switch(product){
//   case "Wood":
//     window.alert("Please product type")

//     break;
//     case "Furniture":
//       window.alert("Please store in the Showroom ")

//       break;
//       case "Wood":
//         window.alert("Please store in the Warehouse")

//         break;
//         default:
//           window.alert("Unkown product please check again")
// }

// let number = prompt("Enter number : (Wood, Furniture)")

// switch(true){
//   case number > 0:
//     window.alert("Number is positive")

//     break;
//     case number == 0:
//       window.alert("Number is zero")

//       break;
//       case number < 0:
//         window.alert("Number is negative")

//         break;
//         default:
//           window.alert("Please check again")

// }


//Assignment
//(Read about);
//DOM

// condition ? valueIfTrue : valueIffalse;


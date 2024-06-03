// console.log(">>>>>> JS Code Starts Here <<<<<<<");

// // variable declaration 
// let year = 2025;
// let month = "May";
// let date = 20;
// let hour = 21;

// // String concetanation
// let message = "Hello World " + year + " / " + month + " / " + date + " " + hour + " : ";

// let smartMessage = `Hello World ${year} / ${month} / ${date} ${hour} : `;


// console.log(message);
// console.log('----------------');
// console.log(smartMessage);

// let age = null;
// console.log(age);


// console.log('-------Type Conversion---------');

// let value = false; // boolean
// value = String(value); // Force convert to string
// console.log(value); // data type of current variable value


// console.log('-------Var vs (Let vs Const)---------');
// var number = 123;
// console.log(number);


// // Block Scope, let, const


// console.log('-------Conditional Statement---------');

// // let leapYear;
// // if (year == 2024) {
// //     // New block Scope
// //     leapYear = yes;
// // } else if (year < 2024) {
// //     leapYear = no; 
// // }  else if (year < 2024) {
// //     leapYear = no;
// // } 
// // else  {
// //     leapYear = "exception";
// // }


// console.log('-------Conditional Operator---------');
// // let leapYear2 = (year == 2024) ? yes : no; // Recommended


// console.log('-------Nullish Operator---------');
// let user; 
// if(user == null) {
//     console.log("Unknown User");
// }

// console.log(user ?? "Unknown User");


// console.log('-------Function---------');
// function showMessage() { // New Block Scope

//     let year = 2024; // local variable
//     const DB_NAME = 12;
//     year = 2021; // Re-declare
//     totalMonths = 11; // Assignment illegale / not allowed, Re-assign not allowed
//     console.log(`Year: ${totalMonths}`);
// }
// console.log(`Year: ${year}`);


// showMessage();


console.log(hoistedVariable);
var hoistedVariable = 'Something';

console.log(hoistedVariable);

hoistedFunction();

function hoistedFunction() {
    console.log("Do Something");
}


function reverseText(text) {
    // String.prototype.split
    let reversed = text.split("").reverse().join("");
    return reversed;
}

console.log(reverseText("ABC"));

function sum (first, ...others) {
    console.log(first);
    console.log(others);

    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}

sum(1, 2, 3, 4, 5);
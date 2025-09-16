/**
 * Variables & Data Types
Declare variables of all data types and print them using typeof.
Swap two numbers without using a third variable.
Store your name, age, and city in variables, and print a sentence like:
"I am Sai Kiran, 23 years old, from Hyderabad."
Declare a constant PI = 3.14, calculate area of a circle with radius 5.
Check the difference between let, var, and const by reassigning them.

🔸 Input/Output
Take two numbers as input and print their sum.
Take a string input and print it reversed.
Ask user for their age and print "Adult" if >=18 else "Minor".
Take N from user and print numbers from 1 to N.
Take a sentence and print number of words in it.

🔸 Conditionals
Find the largest of three numbers.
Check if a number is even or odd.
Check if a year is leap year.
Write a program to assign grades: 90+ → A --80–89 → B --70–79 → C --Below 70 → Fail
Take a day number (1–7) and print day name using switch.
 */

// // // Variables & Data Types

// // Declare variables of all data types and print them using typeof.
// let name = "sai"
// let age = 22
// let isStudent = true
// let given;
// let empty = null
// console.log( typeof name, name)
// console.log( typeof age, age)
// console.log( typeof isStudent, isStudent)
// console.log( typeof given, given)
// console.log( typeof empty, empty)

// // Swap two numbers without using a third variable.
// let a = 10
// let b = 20
// a = a+b
// b = a-b
// a = a-b
// console.log(a)
// console.log(b)


// // Store your name, age, and city in variables, and print a sentence like:
// // "I am Sai Kiran, 23 years old, from Hyderabad."
// let name = "Sai"
// let age = 22
// let city = "Hyderabad"
// console.log("name :", name)
// console.log("age :", age)
// console.log("city :", city)


// // Declare a constant PI = 3.14, calculate area of a circle with radius 5.
// let pi = 3.14
// let radius = 5
// console.log("area : ", pi*radius)

// // Check the difference between let, var, and const by reassigning them.
// var a;
// a = 10
// var a = 20;
// let b;
// b = 10;
// const c = 20;



//  Input/Output

// // Take two numbers as input and print their sum.
// let num1 = parseInt(prompt("Enter number1: "))
// let num2 = parseInt(prompt("Enter number2: "))
// let sum = num1+num2
// console.log("Sum of 2 numbers : ", sum)

// // Take a string input and print it reversed.
// // let name = "sai Kiran"
// // let rev_str = name.split("").reverse().join("")
// // console.log(rev_str)

// let name = "sai"
// let rev = "";
// for (let i = name.length -1; i >= 0; i--){
//     rev += name[i] 
// }
// console.log(rev)


// // Ask user for their age and print "Adult" if >=18 else "Minor".
// let age = parseInt(prompt("Enter your age : "))
// if (age >=18){
//     console.log("Adult")
// }
// else {
//     console.log("Minor")
// }


// // Take N from user and print numbers from 1 to N.
// let num = parseInt(prompt("Enter a number: "))
// str1=""
// for (let i = 1; i<=num; i++){
//     str1+=" "+i
// }
// console.log(str1)


// // Take a sentence and print number of words in it.
// let paragraph = "sai kiran"
// let list = paragraph.split(" ")
// let count = 0
// for (let i = 0; i<list.length; i++) {
//     count = count+1
// }
// console.log("using loop: ",count)
// console.log("Lenght method: ", list.length)







// Conditionals

// // Find the largest of three numbers.
// let a = parseInt(prompt("Enter number1 : "))
// let b = parseInt(prompt("Enter number2 : "))
// let c = parseInt(prompt("Enter number3 : "))
// if (a>b && a>c){
//     console.log("a is greater")
// }
// else if (b>a && b>c){
//     console.log("b is greater")
// }
// else {
//     console.log("c is greater")
// }


// // Check if a number is even or odd.
// let num = Number(prompt("Enter a number: "))
// if (num % 2 == 0) {
//     console.log("Number is even",num)
// }
// else {
//     console.log("Number is odd", num)
// }


// // Check if a year is leap year.
// let year = parseInt(prompt("Enter a year to chech: "))
// if ( (year%4==0 || year%100!==0) && (year%400==0) ){
//     console.log(year, "is a leap year")
// }
// else {
//     console.log("Not a leap year")
// }

// // Write a program to assign grades: 90+ → A --80–89 → B --70–79 → C --Below 70 → Fail
// let marks = parseInt(prompt("Enter your marks: "))
// if (marks >= 90) {
//     console.log("A grade")
// }
// else if (marks >= 80) {
//     console.log("B grade")
// }
// else if (marks >= 70){
//     console.log("C grade")
// }
// else{
//     console.log("Fail")
// }


// // Take a day number (1–7) and print day name using switch.
// let num = parseInt(prompt("Enter a day number: "))
// switch(num){
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Enter less than 7")
// }
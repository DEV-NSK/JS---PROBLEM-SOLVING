// //                 Very Important Basic Questions 🎉




// // Prime Number

// function prime() {
//     let num = 9
//     let isPrime = true
//     if(num <= 1) {
//         console.log(`{num} is not a prime`)
//     }
//     else {
//         for(let i=2; i<=Math.sqrt(num); i++) {
//             if(num % i == 0) {
//                 isPrime = false
//                 break
//             }
//         }
//         if(isPrime) {
//             console.log(`${num} is a prime`)
//         }
//         else {
//             console.log(`${num} is not prime`)
//         }
//     }
// }
// prime()





// // Palindrome 

// function palindrome() {
//     let name = prompt("Enter a word : ")
//     name = name.toLowerCase()
//     let rev = ""
//     for(let i=name.length-1; i>=0; i--) {
//         rev += name[i] 
//     }
//     if(name == rev) {
//         console.log(`${name} is palindrome`)
//     }
//     else {
//         console.log(`${name} is not palindrome`)
//     }
// }
// palindrome()





// // Armstrong number 

// function armstrong() {
//     let num = parseInt(prompt("Enter a number : "))
//     num = num.toString()
//     let sum = 0
//     for(let i of num) {
//         sum = sum + (i**num.length)
//     }
//     if(num == sum) {
//         console.log(`${num} is armstrong number`)
//     }
//     else {
//         console.log(`${num} is not armstrong`)
//     }
// }
// armstrong()





// // Factorial 

// function factorial() {
//     let num = parseInt(prompt("Enter a number : "))
//     let sum = 1
//     for(let i=num; i>=1; i--) {
//         sum *= i
//     }
//     console.log(`${num} factorial is ${sum}`)
// }
// factorial()





// // Swap two numbers 

// function swap() {
//     let a = 32
//     let b = 76
//     a = a + b
//     b = a - b 
//     a = a - b
//     console.log(`a = ${a}`)
//     console.log(`b = ${b}`)
// }
// swap()





// // Fibonacci 

// function fibonacci() {
//     let num = parseInt(prompt("Enter a number : "))
//     let a = 0
//     let b = 1
//     let i = 1
//     let fibo = ""
//     while(i<=num) {
//         fibo += a + " "
//         let c = a + b
//         a = b 
//         b = c
//         i++;
//     }
//     console.log(fibo)
// }
// fibonacci()





// Largest ,smallest ,second smallest ,second largest ,third smallest ,third largest in an array







// // Patterns like (square ,pyramid,triangle ,reverse triangle,) 

// // Square
// for (let i=1; i<=5; i++) {
//     let star = ""
//     for(let j=1; j<=5; j++) {
//         star += "*" + " "
//     }
//     console.log(star)
// }

// // Pyramid
// let n = 20;
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//     }
//     console.log(row);
// }

// // Triangle
// for (let i=1; i<=5; i++) {
//     let star = ""
//     for(let j=1; j<=i; j++) {
//         star += "*"
//     }
//     console.log(star)
// }

// // Reverse Triangle
// for(let i=1; i<=5; i++) {
//     let star = " "
//     for(let j=5; j>=i; j--) {
//         star += "*" + " "
//     }
//     console.log(star)
// }



// // Anagrams

// function anagrams() {
//     let word1 = prompt("Enter a string1 : ")
//     let word_1 = word1.toLowerCase().split("").sort().join("")
//     let word2 = prompt("Enter a string2 : ")
//     let word_2 = word2.toLowerCase().split("").sort().join("")
//     if(word_1 == word_2) {
//         console.log(`${word1} <-> ${word2} is anagram`)
//     }
//     else {
//         console.log(`${word1} <-> ${word2} is not anagram`)
//     }
// }
// anagrams()





// Matrix problems like (Transpose of a matrix)

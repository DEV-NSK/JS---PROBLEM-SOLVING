/**
 *                  FUNCTIONS
 */


// // Write a function to find factorial of a number.

// function factorial() {
//     let num = parseInt(prompt("Enter a number: "))
//     let sum = 1
//     for(let i=num; i>1; i--) {
//         sum = i * sum
//     }
//     console.log(`Factorial of ${num} is ${sum}`)
// }
// factorial();





// // Write a function to check if a number is prime.

// function prime() {
//     let num = parseInt(prompt("Enter a number : "))
//     let isPrime = true
//     if (num < 2) {
//         isPrime = true
//     }
//     else {
//         for(let i=2; i<=Math.sqrt(num); i++) {
//             if(num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(num + " is a prime number")
//         }
//         else {
//             console.log(num + " is not a prime number")
//         }
//     }
// }
// prime();





// // Write a function to reverse a string.

// function rev() {
//     let str = prompt("Enter a string : ")
//     rev_str = ""
//     for(let i=str.length-1; i>=0; i--) {
//         rev_str += str[i]
//     }
//     console.log(rev_str)
// }
// rev();





// // Write a function to check if a string is palindrome.

// function palindrome() {
//     let str = prompt("Enter a string : ")
//     str = str.toLowerCase()
//     let rev = ""
//     for(let i=str.length-1; i>=0; i--) {
//         rev += str[i]
//     }
//     if(str === rev) {
//         console.log(str + " 'is a palindrome'")
//     }
//     else{
//         console.log(str + " 'is not a palindrome'")
//     }
// }
// palindrome()





// // Write a function to find Fibonacci series up to N terms.

// function fibonacci() {
//     let n = 5;
//     let fibo = ""
//     let a = 0
//     let b = 1
//     let i = 1
//     while(i <= n) {
//         fibo += a + " "
//         let c = a + b
//         a = b 
//         b = c
//         i++;
//     }
//     console.log(fibo)
// }
// fibonacci()





// // Write a function to count vowels in a string.

// function vowels() {
//     let str = prompt("Enter a string : ")
//     str = str.toLowerCase()
//     let count = 0
//     for (let i=0; i<=str.length-1; i++) {
//         if (str[i] === "a"|| str[i] === "e"|| str[i] === "i"|| str[i] === "o"|| str[i] === "u" ) {
//             count += 1
//         }
//     }
//     console.log(count)
// }
// vowels()





// // Write a function to find maximum element in an array.

// function max() {
//     let arr = [1, 3, 5, 7, 12, 6, 2]
//     let max_val = arr[0]
//     // // arr = arr.sort((a, b) => a - b)
//     // // console.log(arr[arr.length-1])
//     // console.log(Math.max(...arr))
//     for(let i of arr) {
//         if (i > max_val) {
//             max_val = i
//         }
//     }
//     console.log(max_val)
// }
// max()





// // Write a function to check if two strings are anagrams.

// function anagrams() {
//     let word1 = prompt("Enter word1: ")
//     let word_1 = word1.split("").sort().join("")
//     let word2 = prompt("Enter word2: ")
//     let word_2 = word2.split("").sort().join("")
//     if (word_1 === word_2) {
//         console.log(`"${word1}" <-> "${word2}" is anagram words`)
//     }
//     else {
//         console.log(`"${word1}" <-> "${word2}" is not anagram words`)
//     }
// }
// anagrams()





// // Write a function to return the sum of digits of a number.

// function digits() {
//     let num = parseInt(prompt("Enter a number : "))
//     num = num.toString()
//     let count = 0
//     for(let i of num) {
//         count += 1
//     }
//     console.log(count)
// }
// digits()





// // Write a function that takes a number and returns whether it’s Armstrong number.

// function armstrong() {
//     let num = parseInt(prompt("Enter a number : "))
//     num = num.toString()
//     sum = 0
//     for(let i of num) {
//         sum = sum + (i**num.length)
//     }
//     if (num == sum) {
//         console.log(num + " is a armstrong number")
//     }
//     else {
//         console.log(num + " is not armstrong number")
//     }
// }
// armstrong()
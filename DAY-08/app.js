// Difficulty Level : Easy

// // 1. Create a function that takes two numbers as arguments and returns their sum.
// function sum(a,b) {
//     return `sum : ${a+b}`
// }
// console.log(sum(2,3))



// // 2. Write a function that takes an integer minutes and converts it to seconds.
// function sec(num) {
//     console.log(`${num} minutes =  ${num*60} seconds`)
// }
// sec(10)



// // 3. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// function inc(num) {
//     return num+1
// }
// console.log(inc(2))



// // 4. Create a function that takes the age in years and returns the age in days.
// function age(year) {
//     return `${year} years have ${year*365} days`
// }
// console.log(age(22))



// // 5. Create a function that takes voltage and current and returns the calculated power.
// function power(vol, curr) {
//     return `${vol} voltage and ${curr} current = ${vol*curr} Power`
// }
// console.log(power(20,10))



// // 6. Write a function that returns the string "something" joined with a space " " and the given argument a.
// function something(a) {
//     console.log(`something ${a}`)
// }
// something("sai")



// // // 7. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
// let inte = function(a,b) {
//     if((a==10&&b!==10) || (a!==10&&b==10) || (a+b==10)) {
//         console.log(true)
//     }
//     else {
//         console.log(false)
//     }
// }
// inte(10,10)



// // 8. Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// let data = function(str1, str2) {
//     if(str1.length === str2.length) {
//         console.log(true)
//     }
//     else {
//         console.log(false)
//     }
// }
// data("sai","ias")



// // 9. Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
// let greet = (a) => {
//     return `hello ${a}`
// }
// console.log(greet("sai"))



// // 10. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
// let phone = (num) => {
//     let number = ""
//     for(let i=0; i<num.length; i++) {
//         if(i<=3) {
//             if(i<=0) {
//                 number += "(" + num[i]
//             }else if(i<3) {
//                 number += num[i]
//             }else if (i<=3){
//                 number +=  ")" + " " + num[i]
//             }
//         }
//         else if (i<= 5) {
//             number += num[i]
//         }
//         else if(i<=6) {
//             number += "-" + num[i]
//         }
//         else {
//             number += num[i]
//         }
//     }
//     console.log(number)
// }
// phone("1234567890")




// // 11. Create a function that returns an array of strings sorted by length in ascending order.
// // Example:
// // sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// let arr = ["a", "ccc", "dddd", "bb"]
// for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++) {
//         if(arr[i].length > arr[j].length) {
//             let temp = arr[i]
//             arr[i] = arr[j] 
//             arr[j] = temp
//         } 
//     }
// }
// console.log(arr)





// // 12. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// // Example:
// // findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// let arr = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
// let final = []
// for(let i=0; i<arr.length; i++) {
//     for(let j=0; j<arr[i].length; j++) {
//         for(let k=j+1; k<arr[i].length; k++) {
//             if (arr[i][j] > arr[i][k]) {
//                 let temp = arr[i][j]
//                 arr[i][j] = arr[i][k]
//                 arr[i][k] = temp
//             }
//         } 
//     }
//     final[final.length] = arr[i][arr[i].length-1]
// }
// console.log(final)




// // 13. Create a function that takes an array of numbers and returns the second largest number.
// // Example:
// // secondLargest([10, 40, 30, 20, 50]) ➞ 40
// let arr = [10, 40, 30, 20, 50]
// let sec_num = []
// for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i] 
//             arr[i] = arr[j] 
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr[arr.length-2])
 



// // 14. Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// // Example:
// // removeDups([1, 0, 1, 0]) ➞ [1, 0]
// // removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
// let arr = [1, 0, 1, 0]
// let sort_arr = []
// for(let i=0; i<arr.length; i++) {
//     let isDup = false
//     for(let j=0; j<sort_arr.length; j++) {
//         if(arr[i] === sort_arr[j]) {
//             isDup= true
//             break
//         }
//     }if(!isDup) {
//         sort_arr[sort_arr.length] = arr[i]
//     }
// }
// console.log(sort_arr)




// // 15. Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.
// // Example:
// // findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3
// let arr = [2, 2, 2, 3, 4, 4, 4]
// let spc = ""
// for(let i=0; i<arr.length; i++) {
//     let count = 0
//     for(let j=0; j<arr.length; j++) {
//         if(arr[i] === arr[j]) {
//             count++
//         }
//     }
//     if(count===1) {
//         spc += arr[i]
//     }
// }
// console.log(spc)




// // 16. Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// // Example:
// // charCount("c", "Chamber of secrets") ➞ 1
// function char_count(letter, str) {
//     let count = 0
//     for(let i of str) {
//         if(letter === i) {
//             count += 1
//         }
//     }
//     console.log(count)
// }
// char_count("o","Chamber of secrets")





// // 17. Create a function that takes a string and returns the number (count) of vowels contained within it.
// // Example:
// // countVowels("Celebration") ➞ 5
// function vowels(str) {
//     let count = 0
//     for(let i of str) {
//         if((i==="a") || (i==="e") || (i==="i") || (i==="o") || (i==="u")) {
//             count += 1
//         }
//     }
//     console.log(count)
// }
// vowels("sai kiran")




// // 18. Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// // Example:
// // reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
// function reverseCase(str) {
//     let rev = " "
//     for(let i=0; i<str.length; i++) {
//         let code = str[i].charCodeAt(0)
//         if(code>=97 && code<=122) {
//             rev += String.fromCharCode(code-32)
//         }
//         else if (code>=65 && code<=90) {
//             rev += String.fromCharCode(code+32)
//         }
//         else {
//             rev += str[i]
//         }
//     }
//     console.log(rev)
// }
// reverseCase("sAI kIRAN")




// // 19. Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
// // 			Input:      n=5
// // 			Output:   2 4 6 8 10
// // 			Explanation:  Loop start with 1 go till 5 bcoz n=5
// // 					1 x 2 =2, 2 x 2=4, 3 x 2=6 …..etc 
// function even(n) {
//     let str = ""
//     let i = 1
//     while(i<=5) {
//         str += i*2 + " "
//         i++
//     }
//     console.log(str)
// }
// even(5)




// //  20. Create Function that will take one parameter and return type of the data.
// // 			Input:       500
// // 			Output:     Integer
// // 			Input:       Coding
// // 			Output:    String
// function type_check(data) {
//     console.log(typeof(data))
// }
// type_check(500)




// //  21. Program to find greatest of three numbers(using ternery operator).
// // 			Input:  4 8 2
// // 			Output: 8 is gretest
// let a = 500
// let b = 2000
// let c = 10000
// let out = (a>b && a>c) ? console.log(a) : (b>c && b>a) ? console.log(b) : console.log(c)




// //  22 . Program to find factorial of number.
// // 			Input: n=5
// // 			Output: 120
// // 			Explanation: 5 x 4 x 3 x 2 x 1 = 120
// let n = 5
// let count = 1
// // for(let i=n; i>=1; i--) {
// //     count *= i
// // }
// let i = 1
// while (i<=n) {
//     count *= i
//     i++
// }
// console.log(count)



	
// //  23. C Program to arrange numbers in ascending order
// // 			Input: [2,3,1,5,4]
// // 			Output: [1,2,3,4,5]
// // 		        Sort the Array using loop only(you can not use predefined function).
// let arr = [2,3,1,5,4]
// let out = []
// for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++)  {
//         if(arr[i] > arr[j]) {
//             let temp = arr[i]
//             arr[i] = arr[j] 
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)




// //  24. Print Patter using loop.
// // 			1
// // 			1 2
// // 			1 2 3
// // 			1 2 3 4
// //   		1 2 3 4 5
// let n = 5
// for(let i=1; i<=n; i++) {
//     let num = ""
//     for(let j=1; j<=i; j++) {
//         num += j + " "
//     }
//     console.log(num)
// }



	
// //  25. Program to Calculate the Power of a Number(using loop only).
// // 			Input: n=5, p=3
// // 			Output: 5 ^ 3 = 125
// // 			Explanation: 5 x 5 x 5 = 125\
// let num = 5
// let power = 3
// let val = 1
// for(let i=1; i<=power; i++) {
//     val = val*num
// }
// console.log(val)




// //  26. Program to Check Whether a Number is Prime or Not
// // 			Input: 9
// // 			Output: 9 is not a prime no
// // 			Input: 7
// // 			Output : 7 is a prime 
// let num = 15
// let isPrime = false 
// if(num === 1) {
//     isPrime = true
// }
// else {
//     for(let i=2; i<num; i++) {
//         if(num%i===0) {
//             isPrime = true
//             break
//         }
//     }
// }
// if(isPrime) {
//     console.log(`${num} is not prime`)
// }
// else {
//     console.log(`${num} is prime`)
// }




// //  27. Program to find LCM of two numbers using while loop
// // 			Input: 15 50
// // 			Output: Lcm of 15 and 50 is 150.
// let a = 10
// let b = 20
// let max = (a>b) ? a : b
// let lcm = max
// while (true) {
//     if(lcm%a==0 && lcm%b==0) {
//         break
//     }
//     lcm++
// }
// console.log(`LCM of ${a} - ${b} = ${lcm}`)




// //  28. Program to Display Characters from A to Z Using Loop with count.
// // 			Output: A1 B2 C3 D4 E5 F6 ……. Z26 
// // let char = ""
// let final = ""
// let i = 1
// let charCode = 65
// while (i<=26) {
//     final += String.fromCharCode(charCode) + i + " "
//     i++
//     charCode++
// }
// console.log(final)




// // 29. Program to find a missing number
// // 			Input:  n=5(length of array), arr= [5,3,1,2,4]
// // 			Output: 2 is missing
// // 		Using loop only(you can not use predefined function)
// let n = 5
// let arr = [5,1,4]
// let miss = ""
// for(let i=1; i<=n; i++) {
//     let isFound = false
//     for(let j=0; j<arr.length; j++) {
//         if(arr[j] === i) {
//             isFound = true
//             break
//         }
//     }
//     if(!isFound) {
//         miss += i + ","
//     }
// }
// console.log(miss,"- is missing")





// // 30. Program to count vowels and consonants in a given String.
// // 			Input: i am ram
// // 			Output: 3 vowels 3 consonants.
// let str = "i am sai kiran"
// let vowels = 0
// let consts = 0
// for(let i of str) {
//     if (i === " ") {
//         continue
//     }
//     else if((i==="a") || (i==="e") || (i==="i") || (i==="o") || (i==="u")) {
//         vowels += 1
//     }
//     else {
//         consts += 1
//     }
// }
// console.log(vowels)
// console.log(consts)




// // 31. Reverse a number using while Loop
// // 			Input: 123
// // 			Output: 321
// let num = 123
// let rev = ""
// while (num > 0) {
//     let temp = num%10
//     rev += temp
//     num = Math.floor(num/10)
// }
// console.log(rev)




// // 32. Count occurrence of number:
// // 			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , find=7
// // 			Output: 7 present 2 times.
// let arr = [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10]
// let num = 1
// let count = 0
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]===num) {
//         count++
//     }
// }
// console.log(`${num} present ${count} times`)

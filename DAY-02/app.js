// Print numbers from 1 to N (input).
// for
// let num = parseInt(prompt("Enter a number: "))
// numbers = " "
// for (let i = 1; i<=num; i++){
//     numbers = numbers + " " + i
// }
// console.log(numbers)

// // while
// let num = parseInt(prompt("Enter a number: "))
// i = 1
// numbers = " "
// while(i<=num) {
//     numbers += " " + i
//     i++;
// }
// console.log(numbers)




// // Print sum of first N natural numbers.
// // for
// let num = parseInt(prompt("Enter a number: "))
// sum = 0
// for (let i=1; i<=num; i++) {
//     sum += i
// }
// console.log(sum)

// // while
// let num = parseInt(prompt("Enter a number: "))
// i = 1
// count = 0
// while (i<=num) {
//     count += i
//     i++;
// }
// console.log(count)




// // Print multiplication table of a number.
// // for
// let num = parseInt(prompt("Enter a number: "))
// for (let i = 1; i<=10; i++) {
//     console.log(i*num)
// }

// // while
// let num = parseInt(prompt("Enter a number: "))
// i = 1
// while(i<=10) {
//     console.log(i*num)
//     i++
// }




// // Print all even numbers from 1 to 50.
// // for
// let num = parseInt(prompt("Enter a number: "))
// evenNum = " "
// for(let i=1; i<=num; i++) {
//     if (i%2==0) {
//         evenNum += " " + i 
//     }
// }
// console.log(evenNum)

// // while 
// let num = parseInt(prompt("Enter a number: "))
// i = 1
// evenNum = " "
// while(i<=num) {
//     if (i%2==0) {
//         evenNum += " "+ i
//     }
//     i++
// }
// console.log(evenNum)




// // Find factorial of N using loop.
// // for
// let num = parseInt(prompt("Enter a number: "))
// factorial = 1
// for(let i=num; i>=1; i--) {
//     factorial =  factorial*i
// }
// console.log(factorial)

// // while
// let num = parseInt(prompt("Enter a number: "))
// i = num
// factorial = 1
// while(i>=1) {
//     factorial = factorial*i
//     i--;
// }
// console.log(factorial)




// // Count digits in a number.
// // for
// let num = parseInt(prompt("Enter a number: "))
// let count = 0
// for(let i=num; i>0; i=Math.floor(i/10)){
//     count += 1
// }
// console.log(count)

// // while
// let num = parseInt(prompt("Enter a number: "))
// count = 0
// while(num>0){
//     num = Math.floor(num/10)
//     count += 1
// }
// console.log(count)




// // Reverse a number using loop.
// // for
// let num = prompt("Enter a number: ")
// rev = " "
// for(let i=num.length-1; i>=0; i--) {
//     rev = rev + num[i] 
// }
// console.log(rev)

// // while
// let num = parseInt(prompt("Enter a number: "))
// let rev = ""
// while(num>0) {
//     let last = num % 10
//     rev = rev + last
//     num = Math.floor(num/10)
// }
// console.log(rev)




// // Print Fibonacci series up to N terms.
// // for
// let num = parseInt(prompt("Enter a number: "))
// let a = 0;
// let b = 1;
// let next;
// let fibo = ""
// for(let i=1; i<=num; i++) {
//     fibo = fibo + " " + a
//     next = a+b
//     a = b
//     b = next
// }
// console.log(fibo)

// // while
// let num = parseInt(prompt("Enter a number: "))
// let a = 0
// let b = 1
// let next;
// let fibo = ""
// let i = 1
// while(i<=num) {
//     fibo = fibo + " " + a
//     next = a+b
//     a = b
//     b = next
//     i++
// }
// console.log(fibo)




// // Print all characters of a string one by one.
// // for
// let name = prompt("Enter a string: ")
// for(let i=0; i<=name.length; i++) {
//     console.log(name[i])
// }

// // while
// let name = prompt("Enter a string: ")
// let i = 0
// while(i<=name.length) {
//     console.log(name[i])
//     i++;
// }




// Print a pyramid star pattern.
// for 
// for(let i=1; i<=5; i++) {
//     stars = " "
//     for(let j=1; j<=i; j++) {
//         stars += "*"
//     }
//     console.log(stars)
// }

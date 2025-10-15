// // Prime Number

// let num = parseInt(prompt("Enter a number"))
// let prime = true
// if (num<=1) {
//     prime = false
// }
// else {
//     for(let i=2; i*i<=num; i++) {
//         if(num%i==0) {
//             prime=false
//         }
//         else {
//             break
//         }
//     }
// }
// if(prime) {
//     console.log("Prime number")
// }
// else {
//     console.log("Not prime number")
// }




// // Palindrome 

// let str = prompt("Enter a string : ")
// let rev = ""
// for(let i=str.length-1; i>=0; i--) {
//     rev += str[i] 
// }
// if(str === rev) {
//     console.log("Palindrome")
// }
// else {
//     console.log("Not palindrome")
// }





// // Armstrong number 

// let num = parseInt(prompt("Enter a number")).toString()
// let total = 0
// let len = num.length
// for(let i=0; i<num.length; i++) {
//     let val = parseInt(num[i])
//     total += val**len
// }
// total = total.toString()
// if(num === total) {
//     console.log(`${num} is armstrong number`)
// }
// else {
//     console.log(`${num} is not armstrong`)
// }





// // Factorial

// let num = 5
// let factorial = 1
// for(let i=num; i>=1; i--) {
//     factorial *= i
// }
// console.log(factorial)





// // Swap two numbers 

// let a = 10
// let b = 20
// console.log(`Before ==>  a = ${a} , b = ${b}`)
// a = a+b
// b = a-b
// a = a-b
// console.log(`After ==>  a = ${a} , b = ${b}`)





// // Fibonacci 

// let count = parseInt(prompt("Enter a number"))
// let a = 0
// let b = 1
// let fibo = ""
// for (let i=1; i<=count; i++) {
//     fibo += a + " "
//     c = a + b
//     a = b
//     b = c
// }
// console.log(fibo)






// Largest ,smallest ,second smallest ,second largest ,third smallest ,third largest in an array

let arr = [1,3,4,6,2,7,5,8,9]
// arr = arr.sort()
for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
        if(arr[i] > arr[j]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr)
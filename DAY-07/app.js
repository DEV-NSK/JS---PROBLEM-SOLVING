// // 1) sort the element in an array in  order 
// //      input : [1,9,3,5,6,12]
// //      output : [1,3,5,6,9,12]
// let arr = [1,9,3,5,6,12]
// for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++) {
//         if(arr[i] > arr[j]) {
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)




// //   2) Fibonacci series - return all the element of Fibonacci series in an given range 
// //      input: 1,14
// //      output : 1,1,2,3,5,8,13
// //      input : 2,8
// //      output :2,3,5
// let start = 2
// let end = 8
// let b = 1
// for(let i=start; i<end; i++) {
//     if(start < end) {
//         console.log(start)
//         let temp = start + b
//         b = start
//         start = temp
//     }
// }




// //   3) Move all the zeros to end
// //      input : [1,0,3,5,0,9]
// //      output : [1,3,5,9,0,0]
// let arr = [1,0,3,5,0,9]
// let first = []
// let last = []
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] !== 0) {
//         first[first.length] = arr[i]
//     }
//     else {
//         last[last.length] = arr[i]
//     }
// }
// let final = [...first , ...last]
// console.log(final)





// //   4) String compression  
// //      input 1 : aaabbcc
// //      output 1 :a3b2c2
// //      input 2 : aabbbc
// //      output 2 : a2b3c1
// let str = "aabbbcca"; 
// let final = "";
// let count = 1;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//         count++;
//     } else {
//         final += str[i] + count;
//         count = 1;
//     }
// }
// console.log(final);






// //   5) Print the pattern
// //      input: 4
// //      output : 
// //               *
// //              * *
// //           * * *
// //          * * * *
// let inp = 4
// for(let i=1; i<=inp; i++) {
//     let star = ""
//     for(let j=1; j<=inp; j++) {
//         if(j<=inp-i) {
//             star += " "
//         }
//         else {
//             star += "*"
//         }
//     }
//     console.log(star)
// }





// // Removing Duplicates from the array
// let arr = [1,2,3,4,3,2,1,4,5]
// let dup = []

// for(let i=0; i<arr.length; i++) {
//     let isDuplicate = false
    
//     for(let j=0; j<dup.length; j++) {
//         if(arr[i]===dup[j]) {
//             isDuplicate = true
//             break
//         }
//     }
    
//     if(!isDuplicate) {
//         dup[dup.length] = arr[i]
//     }
// }
// console.log(dup)
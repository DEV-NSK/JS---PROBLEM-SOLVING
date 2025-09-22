// let arr = [1,2,3,4,5,6,7]


                          // // // ARRAY METHODS

// // // push() => adding new element at the end of the array => returns updated arr
// arr.push(8)
// console.log("pushed at last => 8", arr, "push() => 8")



// // unshift() => adding new element at the starting index => returns updated arr
// arr.unshift(0)
// console.log("pushed at start => 0", arr)



// // pop() => removing last element from array => returns updated arr
// arr.pop()
// console.log("last element removing => 7", arr)



// // shift() => removing the first element from array => returns updated arr
// arr.shift()
// console.log("first element removing => 1", arr)



// // indexOf() => used for checking the index value of element => returns the index value
// console.log("finding index number of value 3 ",arr.indexOf(3))



// // includes() => for checking presence of element in array => returns boolean value 
// console.log("is value 5 present in array ",arr.includes(5))



// // slice(start, end) => forming new arr from the existing arr using start-(index) and end-(lenght-1)
// console.log("forming new arr from existing arr ",arr.slice(3, 5))



// // // concat  => adding 2 arrays using concat and spread operator
// // let arr2 = [10,11,12]
// // // using concat
// // console.log("using concat method ",arr.concat(arr2))
// // spread operator
// console.log("using the spread operator ",[...arr, ...arr2])



// // split() => used for converting string to array
// let str = "hello"
// console.log("string - array : ",str.split(""))



// // splice() => for modifying original arr => can perform "add", "remove", "replace"
// console.log("removing elements using start and lentgh : "
//     ,arr.splice(1,2), "new array : ", arr)

// console.log("adding value 0 to index end : ",
//     arr.splice(arr.length,0,0), "updated arr : ", arr)

// console.log("Replacing element 1 by 0",arr.splice(0,1,0), 
//             "updated arr : ",arr)

// console.log("Removed sub-arr : ",arr.splice(4), "updated arr : ",arr)



// // join() => used for converting array into string
// console.log(arr.join()) // returns with ","
// console.log(arr.join("")) // returns in the form of string without ","












               // // // // // HIGHER ORDER METHODS

// let arr = [1,2,3,4,5,6,7]

// // forEach() => returns the values / elements 
// arr.forEach(i => 
//     console.log(i)
// )



// // map() => returns the values in new array / if condition returns boolean values
// let square = arr.map(i => i*i)
// console.log(square)



// // filter() => returns condition satisfied values
// let filtered = arr.filter(i => i%2!==0)
// console.log(filtered)



// // reduce() => returns single value => we can perform sum and mul of elements/values in arr
// let sum = arr.reduce((total, i) => total+i,0)
// console.log(sum)
// let mul = arr.reduce((total, i) => total*i,1)
// console.log(mul)



// // find() => returns the condition satisfied first value
// let found = arr.find(i => i%3==0)
// console.log(found)



// // some() => returns boolean value true if any one element satisfy the condition / if not returns false
// let some = arr.some(i => i%2==0)
// console.log(some)



// // every()  => returns boolean value "true" if every element satifies condition / if not "false"
// let every = arr.every(i => i%2==0)
// console.log(every)



// // sort() => used for sorting the elements order wise "Ascending / Descending"
// let arr1 = [9,8,7,6,5,4,3,2,1]
// console.log(arr1.sort((a,b) => a+b)) // descending order
// console.log(arr1.sort()) // ascending order



// // flat() => used for converting nested array to single array
// let arr2 = [1,[2,3,[4,[5,6]]]]
// console.log(arr2.flat(1))  // returns new array with opening one nested array 
// console.log(arr2.flat(3)) // returns nested-array in single array



// // flatMap()
// console.log(arr.flatMap(i => [i,i*2]))
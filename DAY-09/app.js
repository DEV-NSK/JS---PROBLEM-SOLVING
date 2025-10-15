// // // //  1. Object creation and accessing values without methods
// // let person = {
// //     name: "sai kiran",
// //     age: 22,
// //     city: " hyderabad"
// // }
// // // console.log(person)
// // // // console.log(`${person.name} ${person.age} ${person.city}`)
// // console.log(Object.keys(person))
// // console.log(Object.values(person))
// // console.log(Object.entries(person))


// // // add, update, delete
// // person.gender = "male"
// // person.age = 23
// // delete(person.city)
// // // console.log(person)

// // // // iteration
// // // for(let i in person) {
// // //     console.log(person[i])
// // // }



// // let arr = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9]
// // ];
// // o/p
// // [
// //   [1, 4, 7],
// //   [2, 5, 8],
// //   [3, 6, 9]
// // ]
// let arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
// let final = []
// for(let i=0; i<arr.length; i++) {
//     let a = 0
//     let temp = []
//     while (a<arr[i].length) {
//         temp[temp.length] = arr[a][i]
//         a++
//     }
//     final[final.length] = temp
// }
// console.log(final)




// // // let count = 0
// // // for(let i in person) {
// // //     count++
// // // }
// // // console.log(count)


// // let persons = {
// //     sai: 22,
// //     manish: 24,
// //     kiran: 26
// // } 
// // let name = ""
// // let age = 0
// // for(let i in persons) {
// //     if(persons[i] > age) {
// //         name = i
// //         age = persons[i]
// //     }
// // }
// // console.log(name, ":", age)


// let user1 = {
//     age:22,
//     name: "kiran"
// }
// // let user2 = {
// //     age: 23
// // }
// // user = Object.assign(user,{age:user1.age})
// // console.log(user)

// let user3 = {
//     age: 23,
//     name: "sai"
// }
// user1 = Object.assign(user1,{age:user3.age}) // user1,{name:user3.name})
// console.log(user1)



// let obj1 = {name:"sai", age:22}
// let obj2 = {city:"Hyderabad"}
// // let obj3 = {}
// // for(let i in obj1) {
// //     obj3[i] = obj1[i]
// // }
// // for(let i in obj2) {
// //     obj3[i] = obj2[i]
// // }
// // console.log(obj3)

// let obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)





// // // // //      OBJECT PROPERTIES

//  // // //   1. freeze()  ==> makes immutable
//  // // //   2. seal()  ==> makes immutable but values are changeable
//  // // //   3. hasOwn()   ==> checking if property / key exists or not
//  // // //   4. create(proto)  ==> creating object using existing one
//  // // //   5. getProtoTypeOf  ==> returns protoType of object  
//  // // //   6. defineProperty(objName, key, descriptor)    ==> adding properties with control 
                                             //// descriptor = value, writable = permission for value modify
                                            ////                      enumerable = permission for iteration 
                                           ////                       configurable = permission for key deletion


// // Object.freeze(objName)

// let person = {
//     name: "sai",
//     age: 22,
//     city: "Hyderabad"
// }
// person = Object.freeze(person)
// person.gender = "male"            // can't add
// person.age = 25                  // can't modify values
// console.log(person)





// // Object.seal(objName)

// let person = {
//     name: "sai",
//     age: 22,
//     city: "Hyderabad"
// }
// person = Object.seal(person)
// person.gender = "male"   // can't add
// delete(person.name)     // can't delete
// person.age = 23        // possible to modify values
// console.log(person)





// // Object.hasOwn(objName, key)    ==> checks if property / key present or not
 
// let person = {
//     name: "sai",
//     age: 22,
//     city: "Hyderabad"
// }
// console.log(Object.hasOwn(person, "age"))        





// // Object.create(proto)

// let person = {
//     greet: function () {
//         console.log("Hello "+ this.name)
//     }
// }
// let user = Object.create(person)
// user.name = "sai"
// user.greet()






// // getProtoTypeOf()

// let person = {
//     greet: function () {
//         console.log("Hello "+ this.name)
//     }
// }
// let user = Object.create(person)
// console.log(Object.getPrototypeOf(user))
// console.log(Object.getPrototypeOf(person))
// console.log(Object.getPrototypeOf(user)===person)
// user.name = "sai"
// console.log(" ")
// console.log(Object.getPrototypeOf(user))
// console.log(Object.getPrototypeOf(person))
// user.greet()





// // Object.defineProperty()

// let user = {}
// user = Object.defineProperty(user, "name", {
//     value: "sai kiran",
//     writable: true,
//     enumerable: false,
//     configurable: false
// })
// user.name = "Bathula"
// delete(user.name)
// console.log(user)
// for(let i in user) {
//     console.log(i)
// }

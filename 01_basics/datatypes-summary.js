// Primitive these are 7 types
// 1. String
// 2. Number
// 3. Boolean
// 4. undefined
// 5. null
// 6. Symbol
// 7. BigInt

// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id === anotherId)
// const bigNumber = 3n
// console.log(typeof bigNumber)


//Non-Primitive/Refrence type
// 1. Array
// 2. Objects
// 3. Function


// 1. Array
// const heros = ["shaktiman", "naagraj", "doga"]

// 2. Objects
// let myObj = {
//     name : "Prabha",
//     age : 21,
// }


// 3. Function
// const myFunction = function(){
//     console.log("Hello i'm an Function")
// }
// console.log(typeof heros)
// console.log(typeof myObj)
// console.log(typeof myFunction)

//***************************************************** */
// memory alocation in javaScript

// Primitive data type is use =====>>>>  Stack Memory 
let myName = "Prabha"
let anotherName = myName
console.log(anotherName)
anotherName = "Abhay"
console.log(anotherName)
console.log(myName)


// Non-Primitive data type is use =====>>>>  Heap Memory 
let userOne = {
    email : "pr@pr.com",
    upi : "pr86@86",
}
console.log(userOne.email)
let userTwo = userOne
userTwo.email = "Prabha@gmail.com"
console.log(userTwo.email)
console.log(userOne.email)
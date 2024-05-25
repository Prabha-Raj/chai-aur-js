// singleton create by using Constructor
// Object.create


// object literals by using literals

const mySym1 = Symbol("key1")

const jsUser = {
    name: "Abhay",
    "full name": "Abhar Pratap Rajput",
    [mySym1]: "myKey1",
    age: 21,
    location: "Bijnor",
    email: "abhay@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym1])
// console.log(typeof jsUser[mySym1])

// how to change values
jsUser.email = "prabha@gmail.com"
console.log(jsUser["email"])

// how to freeze object because i don't want to change values
// Object.freeze(jsUser)
// jsUser.email = "sailu@gmail.com"
// console.log(jsUser["email"])
// console.log(jsUser)

jsUser.greeting = function(){
    console.log(`Hello Js User.`)
}
console.log(jsUser)
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}.`)
}
console.log(jsUser.greetingTwo())

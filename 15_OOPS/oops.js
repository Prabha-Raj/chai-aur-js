
// it is object leteral
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log("Got user Details from DB")
        console.log(`UserName : ${this.username}`)
    },
    
}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = () => {console.log(`Welcome ${this.username} !`)}
    // return this
}


// constructor/instance ---->  new ---> it is create new object copy
// first step ---> create newEmptyObject
// scond step ---> new keyword is called a constructor 
//------- then constructor function provieds us 
//------- all properties of constructor main function that you have creted
// third step ---> in this step all properties and keyword and 
//------- variables and function injected in 'this' keyword
// forth step ---> in this step we will get all values, 
//------- properties, variables and methods in our function that you have called

// const promiseOne = new Promise()
// const date = new Date()

//----- Without new
// const userOne = User("prabha", 15, true)
// console.log(userOne)
// const userTwo = User("prabhakar", 20, false)
// console.log(userOne)

//----- With new
const userOne = new User("prabha", 15, true)
// console.log(userOne)
// console.log(userOne.greeting())
const userTwo = new User("prabhakar", 20, false)
console.log(userOne)
console.log(userOne.constructor)



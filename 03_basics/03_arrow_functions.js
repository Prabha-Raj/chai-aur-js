

const user = {
    username: "Prabhakar",
    peice: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my website.`)
        console.log(this)
        console.log(this)
    }
    
}

// console.log(user)
// user.welcomeMessage()
// user.username = "Abhay"
// console.log(user)
// user.welcomeMessage()


// console.log(this)  // this contains current scope context features


// ****************************** funstions ***************************

// function chai(){
//     let username = "hitesh sir"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username = "hitesh sir"
//     console.log(this.username)
// }
// chai()


// ++++++++++++++++++++++++++++++++++ Arrow functions ++++++++++++++++++

// const chai = () => {
    //     let username = "hitesh sir"
    //     console.log(this)
    // }
    // chai()


    
// ++++++++++++++++++++++++++++++++++Explicit return Arrow functions means --> use of {} and return word is required ++++++++++++++++++
    
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 5))



// ++++++++++++++++++++++++++++++++++Imlicit return Arrow functions means --> use of () and return word is not use  ++++++++++++++++++


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username:"Object Return here"})


// console.log(addTwo(36, 5))





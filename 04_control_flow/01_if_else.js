// +++++++++++++++ if statement +++++++++++++++++++


// let temperature = 41
// if ( temperature < 50){
//     console.log("Temperature less than 50");
// }else{
    //     console.log("Temperature greater than 50");
// }
// console.log("Always Executed");



// const score = 200
// if(score > 100){
    // explici scope
//     const power = "fly"
//     console.log(`User's Power : ${power}`)
// }
// console.log(`User's Power : ${power}`) // cant be accessed because const have block scope


// implecit scope
const balance = 10000
// if(balance > 5000) console.log("test");
// if(balance > 5000) console.log("test"), console.log("test2"), console.log("text3");


// ------------------- Nested if ------------------------//
// if (balance < 5000){
//     console.log("balance is less than 5000");
// }else if(balance < 7500){
//     console.log("balance is less than 5700");
// }else if(balance < 9000){
//     console.log("balance is less than 9000");
// }else{
//     console.log("balance is less than 12000");
// }



const userLoggedIn = true
const debitCard = true
const loggeInFromGoogle = false
const loggeInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("Allow to by Course")
}
if(loggeInFromGoogle || loggeInFromEmail){
    console.log("User Logged in")
}








// class keywor is introduced in javascript virsion ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gam.com", "1546778")
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())


// ============ behind the scene of class in javascript =============== //

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea", "tea@gam.com", "1546")
console.log(tea.changeUsername())
console.log(tea.encryptPassword())

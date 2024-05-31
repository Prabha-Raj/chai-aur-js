// call

function setUsername(name){
    // complex DB calls
    this.username = name
    console.log("called")
}
function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}
const chai = new createUser("chai", "chai@fb", "1235")
console.log(chai)
// ****************** Objects ************************* //
//----- In js All things are objects
//----- like array, string, function


function multiplyBy5(num){

    return num*5
}
multiplyBy5.power = 2
multiplyBy5.it= 10
multiplyBy5.it435= 100
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.it)
// console.log(multiplyBy5.it435)
// console.log(multiplyBy5.prototype)

///========= this keyword 
// this. keyword referce to that current context who is called this

function createUser(username, score){
    this.username = username
    this.score = score
}

///---- this stpe for adding new properties in prototype of createUser function 
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is : ${this.score}`)
}


// const chai = createUser('chai', 25)
// const tea = createUser('chai', 250)

//----- new
const chai = new createUser('chai', 25)
const tea = new createUser('chai', 250)
chai.printMe()
chai.increment()
chai.printMe()


/// ########## NOTES ON new KEYWORD #################
/** 
 * Here's what heppens behind the scenes when the new keyword is used :-
 * 
 * A new object os created: The new keyword initiates the creation
 * of a new JavaScript object.
 * 
 * A prototype is linked: The newly created object gets linked 
 * to the prototype property of the constructor function. 
 * this means that is has access to properties and 
 * methods defined on the constructor's prototype.
 * 
 * The constructor is called: The constuctor function is called
 * with the spedified arguments and this is bound to the newly
 * created object. If no explicit return value is specified from
 * the constructor. JavaScript assumes this, the newly created 
 * object, to be the intended return value.
 * 
 * The new object is returned: After the constructor function
 * has been called, if it dosen't return a non-primitive value
 * (object, array, function, etc...), the newly created object
 * is returned.
 * 
 * 
 */





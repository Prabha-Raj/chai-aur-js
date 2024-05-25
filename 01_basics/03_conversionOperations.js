let score = 33
let score1 = "33"
let score2 = "33abc"
console.log(typeof score2)
console.log(typeof(score2))

// typeof 99 Or typeof(99) boath are same

let valueInNumber = Number(score2)
console.log(typeof valueInNumber)
console.log("valueInNumber = " +valueInNumber)

// NaN // Not a Number  it as an special data type

// null
let score3 = null
console.log(typeof score3)
console.log(score3)
let valueInNumber1 = Number(score3)
console.log(typeof valueInNumber1)
console.log("valueInNumber1 = "+ valueInNumber1)


// NaN
let score4 = NaN
console.log(typeof score4)
console.log(score4)
let valueInNumber2 = Number(score4)
console.log(typeof valueInNumber2)
console.log("valueInNumber2 = "+ valueInNumber2)


// undefine
let score5 = undefined
console.log(typeof score5)
console.log(score5)
let valueInNumber3 = Number(score5)
console.log(typeof valueInNumber3)
console.log("valueInNumber3= "+ valueInNumber3)

// "33" => 33
// "33abs" => NaN
// true/false => 1/0


//Boolean 1
let isLoggedIn = 1
console.log(typeof isLoggedIn)
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("booleanIsLoggedIn = " +booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

// Boolean 0
let isLoggedIn1 = 0
console.log(typeof isLoggedIn1)
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log("booleanIsLoggedIn1 = "+ booleanIsLoggedIn1 )
console.log(typeof booleanIsLoggedIn1)

//some input ""
let isLoggedIn3 = ""
console.log(typeof isLoggedIn3)
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log("booleanIsLoggedIn3 = " +booleanIsLoggedIn3)
console.log(typeof booleanIsLoggedIn3)

// some input "prabha"
let isLoggedIn4 = "prabha"
console.log(typeof isLoggedIn4)
let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
console.log("booleanIsLoggedIn4 = "+ booleanIsLoggedIn4 )
console.log(typeof booleanIsLoggedIn4)


// 1/0 => true/false;
// ""/"anything" => fales/true;

let someNumber = 444
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log("typeof stringNumber = "+ typeof stringNumber)

// console.log("*****************************Operations****************************")

console.log("*****************************Operations****************************")

// Simple operations
let value = 33
let negValue = -value
console.log("negValue = "+negValue)

let str1 = "Hello"
let str2 = " Prabha"
let str3 = str1 + str2
console.log(str3)

// complex operation
console.log("With two arguments")
console.log('1 + 2 = ' + typeof 1 + typeof 2)
console.log('1 + 2 = ' + 1 + 2)
console.log('"1" + 2 = ' + "1" + 2)
console.log('"1" + "2" = ' + "1" + "2")
console.log('1 + "2" = ' + 1 + "2")

console.log("\nWith three arguments")
console.log("1 + 2 + 3 "+ 1 + 2 + 3)
console.log("1 + 2 + 3 "+ 1 + 2 + 3)
console.log('"1" + 2 + 3 = ' +"1" + 2 + 3)
console.log('"1" + "2" + 3 = '+ "1" + "2" + 3)
console.log('1 + "2" + 3 = ' + 1 + "2" + 3)

console.log("With two arguments")
console.log( 1 + 2)
console.log( "1" + 2)
console.log("1" + "2")
console.log(1 + "2")

console.log("\nWith three arguments")
console.log(1 + 2 + 3)
console.log("1" + 2 + 3)
console.log("1" + "2" + 3)
console.log("1" + "2" + "3")
console.log(1 + "2" + "3")
console.log(1 + 2 + "3")

// conversion operation with boolean values 
console.log("conversion operation with boolean values")
console.log(-true) 
console.log(+true) 
console.log(-false) 








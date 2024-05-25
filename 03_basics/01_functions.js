function sayMyName(){
    console.log("Abhay")
}
// sayMyName()


function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}
// addTwoNumbers()
// addTwoNumbers(14, "a")
// addTwoNumbers(14, "4")
// addTwoNumbers(14, null)
// addTwoNumbers(14, undefined)
// addTwoNumbers(14, 4)
// const result = addTwoNumbers(14, 4)
// console.log(result)


function addTwoNumbers1(number1, number2){
    // let result = (number1 + number2)
    // return result
            // OR
    return number1 + number2
}
const result = addTwoNumbers1(10, 4)
// console.log("result : ", result)

function loginUserMessage(username= "Someone"){
    // if (username === undefined){
    if (!username){
        console.log("Please Enter a UserName")
    
    }else{
        return `'${username}' just logged in.`
    }
}
// const msg = loginUserMessage()
const msg = loginUserMessage("Prabha")
// console.log("Message : ",msg)


function calculateCartPrice(val1, val2, ...num1){ // here ... is a rest Operator
    // return [val1, val2, num1]
    return num1
}
// console.log(calculateCartPrice(100, 200, 400, 600, 700))

const user = {
    username: "Abhay",
    price: 1999,
}
function hamdleObject(anyObject){
    console.log(`Username is '${anyObject.username}' and price is ${anyObject.price}`)
}

// hamdleObject(user)
// hamdleObject({
//     username: "sam",
//     price:299,
// })

const myArray = [200, 400, 150, 590]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArray))
// console.log(returnSecondValue([333, 666, 999, 444,]))



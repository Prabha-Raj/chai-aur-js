// scopes

// var contains globle scope that var accessible anywhere
// let contains block scope

// var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // var c = 30
    // c = 30
    // console.log("Inner : ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// closer 
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const username = "hitesh"
    if(username === 'hitesh'){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)



// ************************** Intresting ***********************

// console.log(addOne(5)) // can be access before addOne() initialization
function addOne(num){
    return num + 1
}
console.log(addOne(5))


// console.log(addTwo(5))  // ReferenceError Because can't be access before addtwo() initialization
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))








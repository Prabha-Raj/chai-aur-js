// truthy or falsy value 

// const userEmail = "pr@ab.com"
// if(userEmail){
//     console.log("got UserEmail !")
// }else{
//     console.log("Don't have user Email")
// }

/*

#falsy Values
    { false, 0, -0, BigInt 0n, null, undefined, NAN }

# Truthy Value
    { "o", "false", " ", [], {}, function(){}, }

*/


// ---------->>>>> To Check array is empty or not
// const userArray = []
// if(userArray.length === 0){
//     console.log("Array is empty !")
// }


// ---------->>>>> To Check Object is empty or not
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty !")
// }


//************* some comparisions ******************
// if(false == 0){
//     console.log("false == 0 :", false == 0)
// }
// if(false == ''){
//     console.log("false == '' :", false == '')
// }
// if(0 == ''){
//     console.log("0 == '' :", 0 == '')
// }
// if("" == NaN){
//     console.log("0 == null :", 0 == null)
// }


// Nullish Coalescing Operator  (??): null undefined
// let value1
// value1 = 5 ?? 10
// console.log("value1 = ",value1)

// let value2
// value2 = null ?? 10
// console.log("value2 = ",value2)

// let value3
// value3 = undefined ?? 10
// console.log("value13= ",value3)

// let value4
// value4 = null ?? 20 ?? 10
// console.log("value4 = ",value4)

// let value5
// value5 = undefined ?? 50 ?? 10
// console.log("value5 = ",value5)



//***************Terniary Operator *************** */
// conditon          ?           true           :          false
// conditions likho  ? execut only when true    : execute only when conditions false

const iseTeaPrice =100
iseTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")
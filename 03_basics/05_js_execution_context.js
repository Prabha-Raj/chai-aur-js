/*+++++++++++++++++++ JavaScript EXECUTION Context +++++++++++++

1. Globle Execution Context
2. Function Execution Context
3. Eval Execution Context

# javaScript code is executes in to phases 
1. Memory Creation Phase
    (i). Memory allocation Phase
2. Execution Phase


# how to executed js code
1st --->>>  Globle Execution Phase/ Globle Environment
        ---->>>> This.
2nd --->>> Memory Creation Phase
        ---->>>> here allocate memory to the varibles, functions, objects, arrays,.....etc.
        ---->>>> here variables ki Value 'undefined' hoti hai
3rd --->>> Execution Phase
        ---->>>> yahan per variables ko original values assign ki jati hai


//*************callStack************ */

// function one(params) {
//     console.log("one")
// }
// function two(params) {
//     console.log("two")
//     one()
// }
// function three(params) {
//     console.log("three")
//     two()
// }
// function four(params) {
//     console.log("four")
//     three()
// }
// four()

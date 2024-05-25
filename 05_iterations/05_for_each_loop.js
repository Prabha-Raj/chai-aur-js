// /*************** forEach loop **************** */

const coding = ["js", "rb", "python", "java", "cpp"]

// +++++++++++++++++++++++++++++ using named function +++++++++++
// coding.forEach( function (item) {
//     console.log(item)
// } )

// +++++++++++++++++++++++++++++ using arrow function +++++++++++
// coding.forEach( (item) => {
//     console.log(item)
// } )

///+++++++++++++++++++++++ using pasing referance of an function +++++++++++++++
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


//+++++++++++++++++++++++++++++++++++ or what can do with array by using forEach loop +++++++++++++
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })


// ********************** array of Objects. *********/
const myCoding = [
    {
        languageName: "javascript",
        languageExtention: ".js"
    },
    {
        languageName: "java",
        languageExtention: ".java"
    },
    {
        languageName: "python",
        languageExtention: ".py"
    },
    {
        languageName: "c++",
        languageExtention: ".cpp"
    },
    {
        languageName: "php",
        languageExtention: ".php"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName, ' ==> ', item.languageExtention)
})












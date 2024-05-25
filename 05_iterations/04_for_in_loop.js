// /********************** for in Loop ************** */
// in object for iteration is use for in loop not for of loop
const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : "Swift by apple",
    py : 'Python'
}
// for (const key in myObject) {
//     console.log(`${key}  ==> ${myObject[key]}`)
// }


const programming = ["js", "rb", "py", "java"]
// for(const key in programming){
//     console.log(`${key}  ==> ${programming[key]}`)
// }


// /************ Map with for in loop *************** */
// map ke sath for in loop work nahi kartha or na hi koi ERROR aati hai

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IND', "India")

// for(const key in map){
//     console.log(`${key}  ==> ${map[key]}`)
//     console.log(key)
// }





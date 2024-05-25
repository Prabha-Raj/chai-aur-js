// Array 
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj", "baalveer"]
const myArr1 = new Array(6, 7, 8, 9)
console.log(myArr)
// console.log(myArr1)
// console.log(myHeros)

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2))

// const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr)

console.log(myArr)
console.log(typeof myArr)


// slice OR splice methods

console.log("A ", myArr)
const myn1 = myArr.slice(1, 4)
console.log("myn1 ",myn1)
console.log("A -> B ", myArr)

console.log("C ", myArr)
const myn2 = myArr.splice(1, 4)
console.log("myn2 ",myn2)
console.log("C -> D ", myArr)




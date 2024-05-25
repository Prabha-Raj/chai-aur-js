const name = "Prabhakar"
const age = 21

// this is a bed/wrong approch
console.log("My name is "+name+" and my age is "+age+" years.")

// this is a Good/correct approch
console.log(`Hello i'm ${name} and i'm ${age} years old.`)


const gameName = new String("Prabhakar")
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(6))
console.log(gameName.indexOf("b"))

const newString =  gameName.substring(0,6)
console.log(newString)

const anotherString =  gameName.slice(-9,6)
console.log(anotherString)





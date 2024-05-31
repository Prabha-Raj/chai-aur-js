let myName = "Prabha            "
let myChanal = "CodingLovers            "
// console.log(myName.length)
// console.log(myName.trueLength)

let myHeros = ['thor', 'spiderman']
let herosPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: () => {console.log(`Spidy power is ${this.spiderman}`)},
    getTorPower: () => {console.log(`Thor's power is ${this.thor}`)}
}

Object.prototype.prabha = () => {
    console.log(`This is present is all Objects`)
}
// herosPower.prabha()
// myHeros.prabha()

Array.prototype.heyPrabha = () => {
    console.log(`this is present in only array`)
}
// myHeros.heyPrabha()
// herosPower.heyPrabha() // it will provide error


// +++++++++++++++++ inheritace +++++++++++++++//
// --- prototyple inheritance ---- or -- Old syntax
const User = {
    username : "chai"
}
const Teacher = {
    makeVideos: true
}
const TeachingSupport = {
    isAvaileble: false
}
const TASupport = {
    makeAssingnment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// ------ Mordern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode              "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`Length is : ${this.length}`)
    console.log(`True length is : ${this.trim().length}`)
}
anotherUsername.trueLength()
"hello".trueLength()
"ramram     ".trueLength()

// const tinderUser = new Object() // singleton object

const tinderUser = {} // literal object
tinderUser.id = "123abc"
tinderUser.name = "Sonu"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "somya@by.com",
    fullname: {
        userfullname: {
            firstname: "Prabhakar",
            lastname: "Rajput"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)


const obj1 = { 1: "a", 2: "b", }
const obj2 = { 3: "c", 4: "d", }
const obj4 = { 5: "c", 6: "d", }
const obj5 = { 7: "c", 8: "d", }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4, obj5) 
const obj3 = { ...obj1, ...obj2, ...obj4, ...obj5 }
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "pr1@ab.com",
    },
    {
        id: 2,
        email: "pr2@ab.com",
    },
    {
        id: 3,
        email: "pr3@ab.com",
    },
    {
        id: 4,
        email: "pr4@ab.com",
    },
]

// console.log(users[0])
// console.log(users[1].email)


// create an array of keys or values and entries formate of an object
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))



// ask question to objects
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh sir",
}

// diffrent type of syntax of accessing value of an object
// 1. type
// console.log(course.courseInstructor)

// 2. type
// const {courseInstructor} = course
// console.log(courseInstructor)

// 3. type
// const {courseInstructor: instructor} = course
// console.log(instructor)


// const navbar = ({company}) => { }
// navbar(company = "Abhay")
// console.log(company)


// json(javascript object notation)  object / APIs  means api in object format
// {
//     "name": "hitesh",
//     "courseName": "js in english",
//     "price": "free"
// }


// api in array format
[
    {},
    {},
    {},
]





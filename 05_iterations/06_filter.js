const coding = ["js", "rb", "py", "java"]

// +++++++++++++++++ forEach loop is not return any value implecitly 
// (apni traf se), but it returns explicitly (means forcefully) ++++++++++

// const values = coding.forEach( (item) => {
//     // console.log(values)
//     return item
// })
// console.log(values)

// /--------------------------------------------------------------------/
// # forEach loop kisi bhi value ko return nahi karta hai 
// esliye array ki value ko return karane ke liye 
// fillter() ka pryog kiya jata hai

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// +++++++++++ this is tha right way to return, this is retun each value +++++/
// const newNums = myNums.filter( (num) => num > 4) // it is return that is grater than 4 nums

// +++++++ this is tha wrong way to return this is not retun any value +++++/
// const newNums = myNums.filter( (num) => {
   //     num > 5
// })


// +++++++ this is tha wrong way to return, but this is retun each value +++++/
// const newNums = myNums.filter( (num) => {
//     if (num > 5){
//         return num
//     }
// })


// +++++++++++ this is tha right way to return, this is retun each value +++++/
// const newNums = myNums.filter( (num) => {
//         return num > 5
// })

// console.log(newNums)


// // +++++++++++++++++ forEach loop is not return any value implecitly 
// (apni traf se), but it returns explicitly (means forcefully) ++++++++++


// -------------returns by using forEach looop
// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)



const books = [
    {
        title: 'Book One', genre: 'History', publish: 1986, adition: 1996,
    },
    {
        title: 'Book Three', genre: 'Polity', publish: 1988, adition: 2009,
    },
    {
        title: 'Book Four', genre: 'Science', publish: 1996, adition: 2006,
    },
    {
        title: 'Book Five', genre: 'English', publish: 1956, adition: 1976,
    },
    {
        title: 'Book Six', genre: 'History', publish: 2000, adition: 2000,
    },
    {
        title: 'Book Seven', genre: 'English', publish: 2010, adition: 2020,
    },
    {
        title: 'Book Eight', genre: 'History', publish: 2005, adition: 2021,
    },
]
let userBooks = books.filter( (book) => book.genre === 'History')
//------------- OR -----------------
userBooks = books.filter( (book) => { return book.publish > '2000'})
// ------------- OR ----------------
userBooks = books.filter( (book) => { 
    return book.publish > '1980' && book.genre === "History"
})

console.log(userBooks)













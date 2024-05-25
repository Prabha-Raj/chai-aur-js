// ******************* reduce function ******************/

const myNums = [1, 2, 3, 4]
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} + currval : ${currval} ==>> total : ${acc + currval}`)
//     return acc + currval
// }, 0) // heare 0 is initial Value or ye kuchh bhi ho sukta hai


//-------- by using arrow function--------
// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal)

// ------------------- reduce with Array of Objects ----------------------//
const shoppingCart = [
    {itemName: 'js course', price: 299},
    {itemName: 'java course', price: 399},
    {itemName: 'python course', price: 299},
    {itemName: 'Dsa course', price: 699},
]

const totalPaybleAmount = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(totalPaybleAmount)












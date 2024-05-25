const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])
// console.log(marvel_heros)
// console.log(dc_heros)

// concat function
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// sprade operator
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)


// flat(defth) function
// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
// console.log(another_array)
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


// isArray() or from() function
// console.log(Array.isArray(["Prabhakar"]))
// console.log(Array.isArray("Prabhakar"))
// console.log(Array.from("Prabhakar"))
// console.log(Array.from({name: "Abhay", age: 21, email: "abhay@raj.com"}))  // intresting


let score1 = 100
let score2 = 100
let score3 = 100
console.log(Array.of(score1, score2, score3))

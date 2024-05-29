console.log("Prabhakar");

// Q.1)--->

const str = 'Hello, world'
const result = str.split(',').map(s => 
    s.trim()).join(" and ")
console.log(result)
// iife --->>> Immediately Invoked Function Expresstions (IIFE). 
// syntanx --- >>> (function(){body})(); here semicolon is prefered
// IIFE IS USED FOR SAVE from GLOBLE EXECUTION POLUTION

//  hamara function globle execution se poluted na ho or 
// hamare function turant(Immediately) execute ho jaye 
// esliye IIFE function ka pyog karte hai

// if we are create two or more IIFE function 
// than you should use semicolon in the end of IIFE function is compalsory required 
// like --->> 1-> (function(){})(); 2-> (function(){})()



// Nammed IIFE , without parameter
(function chai (){
    console.log(`DB CONNECTED 1`)
})();

// Nammed IIFE , with parameter
(function code(name){
    console.log(`DB CONNECTED 2 ${name}`)
})('Abhay');


// unNamed IIFE , Without Parameter
(() => {
    console.log(`DB CONNECTED 3 that is`)
})();

// unNamed IIFE , With Parameter
((name) => {
    console.log(`DB CONNECTED 4 that is ${name}`)
})("Prabha");
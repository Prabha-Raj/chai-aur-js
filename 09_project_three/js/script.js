const clock = document.querySelector('#clock')
// console.log(clock)

// const time = Date()
// clock.innerHTML = time.substring(16,24)
 
// --------- OR ----------//

setInterval(function(){
    const localtime = new Date().toLocaleTimeString()
    clock.innerHTML = localtime
},1000)


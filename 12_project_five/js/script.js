const body = document.querySelector('body')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const hexValue = '123456789ABCDEF'
let randomColor ='#'

const changeBackgroundColor = () => {
    function randomBackgroundColor(){
        for(i=0; i < 6; i++){
            randomColor += `${hexValue[Math.floor((Math.random()*16))]}`
        }
        return randomColor
    }
    body.style.backgroundColor = randomBackgroundColor()
    // console.log(randomColor)
    randomColor = '#' // restart value
}
let changeColor;
start.addEventListener('click', (e) => {
    if(!changeColor){
    changeColor = setInterval(changeBackgroundColor, 1000)
    }
})


const stopBackgroundColor = () => {
    clearInterval(changeColor)
    changeColor = null
}
stop.addEventListener('click', stopBackgroundColor)
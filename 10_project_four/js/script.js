const form = document.querySelector('.form')
const userInput = document.querySelector('#guessFeild')
const submit = document.querySelector("#submit")
const msg = document.querySelector('.mgs')
const guessSlot = document.querySelector('.previous-guesses')
const remaining = document.querySelector('.remaining-guesses')
const startOver = document.querySelector('.resultArea')
const lowOrHigh = document.querySelector('.lowOrHigh')
let randomNumber = parseInt(Math.round(Math.random() * 100 + 1))
// console.log(randomNumber)

const p = document.createElement('p')
let prevGuess = []
let numGuess = 0
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please Enter a Valid Number whith in givin range 1 to 100.")

    } else {
        prevGuess.push(guess)
        if (numGuess > 10) {
            displayGuess(guess)
            displayMessage(`Game Over Random Number is : ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You are Winner ! and Random Number is : ${randomNumber}`)
        endGame()
    } else if (numGuess === 10) {
        endGame()
        displayMessage(`You are looser and random Number is : ${randomNumber}`)
    }
    else if (guess < randomNumber) {
        displayMessage("your Number is TOO Low !")
    } else if (guess > randomNumber) {
        displayMessage("your Number is TOO High !")
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`

}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}<h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game<h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.round(Math.random() * 100 + 1))
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10-numGuess}`
        userInput.removeAttribute("disabled", '')
        startOver.removeChild(p)
        displayMessage('')
        playGame = true
    })
}




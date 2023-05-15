// calculator ideas;
// needs:
//  screen
//  buttons (+, -, /, *)
// inputs (numbers) (0-9)
// decimal options
// ~20 operations and numbers
// 1 for on/off
// 1 for clear and reset
// equals to solve problem
// functions to solve for
// 

/* Constants */
const back = document.querySelector('#back')
const clear = document.querySelector('#clear')
const divide = document.querySelector('#divide')
const multiply = document.querySelector('#multiply')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const sqrt = document.querySelector('#sqrt')
const power = document.querySelector('#power')
const equals = document.querySelector('#equals')
const period = document.querySelector('#period')
const num9 = document.querySelector('#btn9')
const num8 = document.querySelector('#btn8')
const num7 = document.querySelector('#btn7')
const num6 = document.querySelector('#btn6')
const num5 = document.querySelector('#btn5')
const num4 = document.querySelector('#btn4')
const num3 = document.querySelector('#btn3')
const num2 = document.querySelector('#btn2')
const num1 = document.querySelector('#btn1')
const num0 = document.querySelector('#btn0')
const displayTxt = document.querySelector('.display')

/* Variables */
let displayedText = ""

/* Functions */

let getText = (string) => {
    displayedText += string
    displayText(displayedText)
}

let displayText = (string) => {
    displayTxt.innerHTML = string
}

let solveProblem = () => {
    let answer = eval(displayedText)
    displayText(answer)
    displayedText = ""

}

let clearDisplay = () => {
    displayedText = ""
    displayText(displayedText)

}

/* Event Listeners */
back.addEventListener('click', () => {
    let deleted = displayedText.substring(0,displayedText.length-1)
    //found at https://www.scaler.com/topics/remove-last-character-from-string-javascript/
    displayedText = deleted
    displayText(displayedText)
})
clear.addEventListener('click', () => {
    clearDisplay()
})
divide.addEventListener('click', () => {
    getText('/')
})
multiply.addEventListener('click', () => {
    getText('*')
})
minus.addEventListener('click', () => {
    getText('-')
})
plus.addEventListener('click', () => {
    getText('+')
})
sqrt.addEventListener('click', () => {
    getText('sqrt')
})
power.addEventListener('click', () => {
    getText('**')
})
equals.addEventListener('click', () => {
    solveProblem()
})
period.addEventListener('click', () => {
    getText('.')
})
num9.addEventListener('click', () => {
    getText(9)
})
num8.addEventListener('click', () => {
    getText(8)
})
num7.addEventListener('click', () => {
    getText(7)
})
num6.addEventListener('click', () => {
    getText(6)
})
num5.addEventListener('click', () => {
    getText(5)
})
num4.addEventListener('click', () => {
    getText(4)
})
num3.addEventListener('click', () => {
    getText(3)
})
num2.addEventListener('click', () => {
    getText(2)
})
num1.addEventListener('click', () => {
    getText(1)
})
num0.addEventListener('click', () => {
    getText(0)
})




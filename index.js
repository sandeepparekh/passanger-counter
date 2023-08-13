// document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count) 

// let myAge = 24

// let humanDogRatio = 7

// myDogAge = myAge * humanDogRatio

// console.log(myDogAge)


// let count = 5

// count = count + 1

// count = count + 10

// count = count - 2

// console.log(count)

// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45

// console.log(bonusPoint)

// function increment() {
//     console.log("The button was clicked")
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// function generateNumber() {
//     console.log(42)
// }

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLapTime() {
//     let totalLap = lap1 + lap2 + lap3
//     console.log(totalLap)
// }

// let lapsCompleted = 0

// function countCompletedLaps() {
//     lapsCompleted = lapsCompleted + 1;
// }

// countCompletedLaps()
// countCompletedLaps()
// countCompletedLaps()

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

let count = 0

function increment() {
    count += 1;
    countEl.innerText = count
    console.log(count)
}

function save() {
    if(count > 0) {
        let countStr = count + " - "
        saveEl.innerHTML += countStr
    }
    count = 0
    countEl.innerText = count
}

// let username = "per"

// let message = "You have three new notifications"

// let messageToUser  = message + ", "+ username + "!"

// let name = "sandeep"

// let greeting = "Hi, my name is "

// let myGreeting = greeting + name;

// console.log(myGreeting)


let welcomeEl = document.getElementById("welcome-el")

let name = "Sandeep Parekh"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name 

welcomeEl.innerText += "👋😎"


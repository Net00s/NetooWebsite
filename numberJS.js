var guesses = 0

addEventListener("DOMContentLoaded", function(){
    const dailyNumber = getRandomNumberByDate(1, 1000000)
    console.log(dailyNumber/1337);
    
})


function giveClues(){
    guesses += 1
    const dailyNumber = getRandomNumberByDate(1, 1000000)
    const guess = document.getElementById("guess")

    const copySize = document.createElement("div")
    const copyDigits = document.createElement("div")
    const copySum = document.createElement("div")
    const copySmallest = document.createElement("div")

    const numberSize = document.createElement("div") // ----------------------------------------------
    if (guess.value > dailyNumber){
        numberSize.innerText = `${guess.value} ⬇️`

        copySize.innerText = "⬇️"
        document.getElementById("copy").appendChild(copySize)
    }
    else if (guess.value < dailyNumber){
        numberSize.innerText = `${guess.value} ⬆️`

        copySize.innerText = "⬆️"
        document.getElementById("copy").appendChild(copySize)
    }
    else{
        numberSize.innerText = `${guess.value} 🟰`

        copySize.innerText = "🟰"
        document.getElementById("copy").appendChild(copySize)
    }
    document.getElementById("container").appendChild(numberSize)

    
    
    const numberDigits = document.createElement("div") // ----------------------------------------------
    if (guesses > 1){
        if (guess.value.length > String(dailyNumber).length){
            numberDigits.innerText = `${guess.value.length} ⬇️`

            copyDigits.innerText = "⬇️"
            document.getElementById("copy").appendChild(copyDigits)
        }
        else if (guess.value.length < String(dailyNumber).length){
            numberDigits.innerText = `${guess.value.length} ⬆️`

            copyDigits.innerText = "⬆️"
            document.getElementById("copy").appendChild(copyDigits)
        }
        else{
            numberDigits.innerText = `${guess.value.length} 🟰`

            copyDigits.innerText = "🟰"
            document.getElementById("copy").appendChild(copyDigits)
        }
    }
    else{
        copyDigits.innerText = "❎"
        document.getElementById("copy").appendChild(copyDigits)
    }
    document.getElementById("container").appendChild(numberDigits)

    const sumDigits = document.createElement("div") // ----------------------------------------------
    if (guesses > 2){
            if (getSumOfDigits(guess.value) > getSumOfDigits(dailyNumber)){
            sumDigits.innerText = `${getSumOfDigits(guess.value)} ⬇️`

            copySum.innerText = "⬇️"
            document.getElementById("copy").appendChild(copySum)
        }
        else if (getSumOfDigits(guess.value) < getSumOfDigits(dailyNumber)){
            sumDigits.innerText = `${getSumOfDigits(guess.value)} ⬆️`

            copySum.innerText = "⬆️"
            document.getElementById("copy").appendChild(copySum)
        }
        else{
            sumDigits.innerText = `${getSumOfDigits(guess.value)} 🟰`

            copySum.innerText = "🟰"
            document.getElementById("copy").appendChild(copySum)
        }
    }
    else{
        copySum.innerText = "❎"
        document.getElementById("copy").appendChild(copySum)
    }
    document.getElementById("container").appendChild(sumDigits)

    const lowestFactor = document.createElement("div") // ----------------------------------------------
    if (guesses > 3){
        if (getSmallestFactor(guess.value) > getSmallestFactor(dailyNumber)){
            lowestFactor.innerText = `${getSmallestFactor(guess.value)} ⬇️`

            copySmallest.innerText = "⬇️"
            document.getElementById("copy").appendChild(copySmallest)
        }
        else if (getSmallestFactor(guess.value) < getSmallestFactor(dailyNumber)){
            lowestFactor.innerText = `${getSmallestFactor(guess.value)} ⬆️`

            copySmallest.innerText = "⬆️"
            document.getElementById("copy").appendChild(copySmallest)
        }
        else{
            lowestFactor.innerText = `${getSmallestFactor(guess.value)} 🟰`

            copySmallest.innerText = "🟰"
            document.getElementById("copy").appendChild(copySmallest)
        }
    }
    else{
        copySmallest.innerText = "❎"
        document.getElementById("copy").appendChild(copySmallest)
    }
    document.getElementById("container").appendChild(lowestFactor)

    if (guess.value == dailyNumber){
        document.getElementById("winscreen").style.visibility = "visible"
        document.getElementById("guessButton").onclick = ""
    }
}


function getSeededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x); 
}

function getRandomNumberByDate(min, max) {
    const today = new Date();
    
    const dateSeed = (today.getFullYear() * 10000) + ((today.getMonth() + 1) * 100) + today.getDate();
    
    const randomFraction = getSeededRandom(dateSeed);
    
    return Math.floor(randomFraction * (max - min + 1)) + min;
}

function getSumOfDigits(num) {
    return String(Math.abs(num))
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}

function getSmallestFactor(n) {
    if (n <= 1) return n;

    for (let i = 3; i <= n; i++) {
        if (n % i === 0) return i;
    }

    return n;
}


function clipboard(){

    const copy = document.getElementById("copy")
    const emojis = Array.from(copy.children).map(element => element.innerText)

    const formatted = emojis.reduce((result, emoji, index) => {
        return result + emoji + ((index + 1) % 4 === 0 ? "\n" : " ")
    }, "")

    navigator.clipboard.writeText(`${formatted} \n ${guesses} guesses \n https://net00s.github.io/NetooWebsite/GuessNumber`)
}
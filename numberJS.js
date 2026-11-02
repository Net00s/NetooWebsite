addEventListener("DOMContentLoaded", function(){
    const dailyNumber = getRandomNumberByDate(1, 1000000)
})


function giveClues(){
    const dailyNumber = getRandomNumberByDate(1, 1000000)
    const guess = document.getElementById("guess")

    const copySize = document.createElement("p")
    const copyDigits = document.createElement("p")
    const copySum = document.createElement("p")

    const numberSize = document.createElement("p")
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

    const numberDigits = document.createElement("p")
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
    document.getElementById("container").appendChild(numberDigits)

    const sumDigits = document.createElement("p")
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
    document.getElementById("container").appendChild(sumDigits)

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

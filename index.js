// Code your solutions in this file

let cards = []

function writeCards(array, event){
    for (let i = 0; i < array.length; i++)
    cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    return cards
}

function countDown(num){
    for (let i = num; i >= 0; i--)
    console.log(i)
}



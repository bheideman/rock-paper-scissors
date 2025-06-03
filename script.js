function getComputerChoice(){
    let chance = Math.floor((Math.random() * 100) + 1)
    let choice
    if (chance <= 33 ) {
        choice = "Rock"
    } else if (chance > 33 && chance <= 66) {
        choice = "Paper"
    } else {
        choice = "Scissors"
    }
    return console.log(choice)
}

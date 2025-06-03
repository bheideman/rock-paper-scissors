let user, computer

function getComputerChoice(){
    let chance = Math.floor((Math.random() * 100) + 1)
    let computerChoice
    if (chance <= 33 ) {
        computerChoice = "Rock"
    } else if (chance > 33 && chance <= 66) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return computer = computerChoice.toLowerCase
}

function getUserChoice() {
    let userChoice = prompt("Type rock, paper, or scissors: ")
    return user = userChoice.toLowerCase()
}

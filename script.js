function capitalize(text) {
            first = text[0].toUpperCase()
            rest = text.slice(1, text.length).toLowerCase()
            return first + rest
        }

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
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Type rock, paper, or scissors: ")
    return humanChoice
}

function playGame(){
    let rounds = 0
    let userScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        computerChoice = getComputerChoice().toLowerCase()
        humanChoice = getHumanChoice().toLowerCase()
    
        if (((humanChoice === "rock" && computerChoice === "paper") || humanChoice === "paper" && computerChoice === "scissors") || humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! " + capitalize(computerChoice) + " beats " + capitalize(humanChoice) + ".")
            computerScore += 1
        } else if (((computerChoice === "rock" && humanChoice === "paper") || computerChoice === "paper" && humanChoice === "scissors") || computerChoice === "scissors" && humanChoice === "rock") {
            console.log("You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice) + ".")
            userScore += 1
        } else {
            console.log("Tie! " + capitalize(humanChoice) + " ties with " + capitalize(computerChoice) + ". Try again!")
        }
    } 

    while (rounds < 5) {
        playRound()
        rounds += 1
    }

    if (userScore > computerScore) {
        console.log("The score is " + userScore + " to " + computerScore + ". Congratulations! You win!")
    } else if (userScore < computerScore) {
        console.log("The score is " + userScore + " to " + computerScore + ". Sorry, you lose!")
    } else {
        console.log("The score is " + userScore + " to " + computerScore + ". Looks like a tie!")
    }
}

playGame()
# rock-paper-scissors
A simple rock, paper, scissors game made as part of TOP foundations learning course. This project uses javascript to create a console based game using prompts to track user input and compare against a randomly generated computer choice for 5 rounds and then declaring a winner.

# capitalizeText
A simple function to capitalize the text for output. This is needed because the user input and computer choice are both normalized first to lowercase for comparison purposes but we want the output to be capitalized like this: "Rock"

# getComputerChoice
This function uses a randomized math function and assigns either rock, paper, or scissors depending on the number generated.

# getHumanChoice
This function asks the user to enter their choice. For this project it is assumed that the user inputs a valid choice of rock, paper, or scissors.

# playGame
This function contains the game logic. First establishing the base round count and scores for both user and computer. 
Within this function is another function named playRound. This function assigns the humanChoice and computerChoice variable by running their respective functions and then comparing their values to determine the winner and tracking their score.
Next there is a simple loop to run the playRound function 5 times for 5 rounds.
After 5 rounds the userScore and computerScore are compared and a winner is declared.
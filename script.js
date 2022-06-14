

function computerPlay () {
    let val = Math.floor(Math.random() * (3 - 1 +1) + 1); 
    
    let output;
    if (val == 1){
        output = "Rock";
    } else if (val == 2){
        output = "Paper";
    } else {
        output = "Scissors";
    }

    return output;
}

//console.log(computerPlay())
//console.log()

function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let outcome;
    console.log(playerSelection)
    console.log(computerSelection)
    // Draw Situation
    if (playerSelection == computerSelection) {
        outcome = "Draw!";
    }
    
    // Computer Wins Situation
    else if (playerSelection == "rock" && computerSelection == "paper"){
        outcome = "Computer Wins!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        outcome = "Computer Wins!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        outcome = "Computer Wins!";
    }

    // Player Wins Situation
    else if (computerSelection == "rock" && playerSelection == "paper"){
        outcome = "Player Wins!";
    }
    else if (computerSelection == "paper" && playerSelection == "scissors"){
        outcome = "Player Wins!";
    }
    else if (computerSelection == "scissors" && playerSelection == "rock"){
        outcome = "Player Wins!";
    }

    return outcome ;
}

console.log(playRound("rock",computerPlay()))
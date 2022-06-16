

function computerPlay () {      // Function to decide what the computer picks 
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


// Plays 1 round of the game with the computer (required user to input their selection before hand, as well as the result from the computerPlay function)
function playRound (playerSelection, computerSelection) {    

    // Ensures casing doesnt become an issue 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    playerWins = false;

    let outcome;
        
    // Draw Situation
    if (playerSelection == computerSelection) {
        outcome = "Draw!";
    }
    
    // Computer Wins Situations
    else if (playerSelection == "rock" && computerSelection == "paper"){
        outcome = "Paper beats Rock. Computer Wins!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        outcome = "Scissors beats Paper. Computer Wins!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        outcome = "Rock beats Scissors. Computer Wins!";
    }

    // Player Wins Situations
    else if (computerSelection == "rock" && playerSelection == "paper"){
        outcome = "Paper beats Rock. Player Wins!";
        playerWins = true;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors"){
        outcome = "Scissors beats Paper. Player Wins!";
        playerWins = true;
    }
    else if (computerSelection == "scissors" && playerSelection == "rock"){
        outcome = "Rock beats Scissors. Player Wins!";
        playerWins = true;
    }

    // Returns multiple values as an array so that its easier to receive the two return values
    return overall = [outcome, playerWins];
}







// Div to display results
const resultView = document.querySelector("#results");
resultView.style.backgroundColor = "pink";
resultView.style.width = "50%";
resultView.style.height = "100%";



const result = document.querySelector("#resTx");
result.style.color = "black";
result.style.textAlign = "center";



// Button to choose rock as an option
const rock = document.querySelector("#rock");
rock.addEventListener('click', function () {
    overall = playRound("rock",computerPlay());
    //alert(overall[0]);
    result.textContent = overall[0];
});

// Button to choose paper as an option
const paper = document.querySelector("#paper");
paper.addEventListener('click', function() {
    overall = playRound("paper",computerPlay());
    //alert(overall[0]);
    result.textContent = overall[0];
});

// Button to choose scissors as an option
const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', function () {
    overall = playRound("scissors",computerPlay());
    //alert(overall[0]);
    result.textContent = overall[0];
});


resultView.appendChild(result);
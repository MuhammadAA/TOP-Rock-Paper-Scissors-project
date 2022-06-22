

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
    plyrWins = false;
    draw = false;
    let outcome;
        
    // Draw Situation
    if (playerSelection == computerSelection) {
        outcome = "Draw!";
        draw = true;
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
        plyrWins = true;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors"){
        outcome = "Scissors beats Paper. Player Wins!";
        plyrWins = true;
    }
    else if (computerSelection == "scissors" && playerSelection == "rock"){
        outcome = "Rock beats Scissors. Player Wins!";
        plyrWins = true;
    }

    // Returns multiple values as an array so that its easier to receive the two return values
    return overall = [outcome, plyrWins, draw];
}





let computerWins = 0;
let playerWins = 0;

const pWinDisplay = document.querySelector("#pWinDisplay");
pWinDisplay.style.display = "inline-block";
pWinDisplay.style.marginLeft = "5px";


const cWinDisplay = document.querySelector("#cWinDisplay");
cWinDisplay.style.display = "inline-block";
cWinDisplay.style.marginLeft = "250px";



const pWins = document.querySelector("#pWins");
pWins.textContent = playerWins;
pWinDisplay.appendChild(pWins);

const cWins = document.querySelector("#cWins");
cWins.textContent = computerWins;
cWinDisplay.appendChild(cWins);





const result = document.querySelector("#resTx");
//result.style.color = "black";
//result.style.textAlign = "center";



function scoreUpdater (overallResult) {
    if (overall[1] == true){
        playerWins+=1;
    }
    else if (overall[1] == false && overall[2] == false){
        computerWins+=1;
    }

    pWins.textContent = playerWins;
    cWins.textContent = computerWins;


    if (playerWins == 5 || computerWins == 5){
        if (playerWins == 5){
            result.textContent = "Player won 5 times. Player Wins!!!"
        }
        else {
            result.textContent = "Computer won 5 times. Computer Wins!!!"
        }

        playerWins = 0
        computerWins = 0
        
    }
}




// Button to choose rock as an option
const rock = document.querySelector("#rock");
rock.addEventListener('click', function () {
    overall = playRound("rock",computerPlay());
    //alert(overall[0]);
    result.textContent = overall[0];
    scoreUpdater(overall);
    //winChecker(playerWins,computerWins);

});

// Button to choose paper as an option
const paper = document.querySelector("#paper");
paper.addEventListener('click', function() {
    overall = playRound("paper",computerPlay());
    //alert(overall[0]);
    result.textContent = overall[0];

    scoreUpdater(overall);
    //winChecker(playerWins,computerWins);
});

// Button to choose scissors as an option
const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', function () {
    overall = playRound("scissors",computerPlay());
    //alert(overall[0]);
    result.textContent = overall[0];

    scoreUpdater(overall);
    //winChecker(playerWins,computerWins);
});


// Div to display results
const resultView = document.querySelector("#results");
resultView.style.backgroundColor = "pink";
resultView.style.width = "60%";
resultView.style.height = "100%";
resultView.style.textAlign = "center";

resultView.appendChild(result);
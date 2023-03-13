

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    const compChoice = options[Math.floor(Math.random() * options.length)];
    return compChoice;
    // console.log(compChoice);
}

let compPick = getComputerChoice();


function getUserChoice(){
    let userChoice = prompt('Please type in "Rock", "Paper", or "Scissors" to make your pick: ').toLowerCase();
        if ((userChoice == 'rock') || (userChoice == 'paper') || (userChoice == 'scissors')) {
            return userChoice;
        // } else if (userChoice == null) {
        //     getUserChoice();
        } else {
            getUserChoice();
        }
    // console.log(userChioce);
    
}

let userPick;
let i = 0;
let playerWins = 0;
let compWins = 0;


function playRound() {
    let compPick = getComputerChoice();
    let userPick = getUserChoice();
    if (compPick == userPick){
        alert('Tie game! Redo');
        (i = i - 1);
        return ('Tie');
       
    } else if ((userPick == 'rock') && (compPick == 'scissors') ||
               (userPick == 'paper') && (compPick == 'rock') ||
               (userPick == 'scissors') && (compPick == 'paper')) {
        
        alert('Player Wins!')
        playerWins = playerWins + 1;
        return ('Player');


    } else {
        alert('Computer Wins!');
        compWins = compWins + 1;
        return ('Computer');

    }
    
}



function finalScore() {
    if (i = 5) {
        alert('The computer won ' + compWins + ' times.');
        alert('You won, ' + playerWins + ' times.')
        if (playerWins > compWins) {
            alert('YOU WIN!');
        } else {
            alert('YOU LOSE!');
        }
    }
}

// displayWinner(); 



 
// function playGame (userPick, compPick) {


//     for (i = 0; i < 5; i++) {
//         playRound();


//     }

//     finalScore();

    

// }


// playGame();
function getComputerChoice() {
    let choiceComp = ["rock", "paper", "scissor"];
    let rand = Math.floor(Math.random() * 3);
    return choiceComp[rand];
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection === playerSelection) {
        return ("We`re even");
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return ("You win!");
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return ("You lose!");
    } else if (computerSelection === "paper" && playerSelection === "scissor") {
        return ("You win!");
    } else if (computerSelection === "scissor" && playerSelection === "paper") {
        return ("You lose!");
    } else if (computerSelection === "scissor" && playerSelection === "rock") {
        return ("You win!");
    } else if (computerSelection === "rock" && playerSelection === "scissor") {
        return ("You lose!");
    }
}

function game() {
    let arr = [];
    let x_win = 0;
    let x_lose= 0;

    for (let i = 0; i < 5; i ++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        arr.push(playRound(playerSelection, computerSelection));
        console.log(playRound(playerSelection, computerSelection));
        if (arr[i] === "You win!")  {
            x_win++;
        } else if (arr[i] === "You lose!") {
            x_lose++;
        }
    }
    if (x_win > x_lose) {
        return("You are winner! Congratulations!");
    }
    else if (x_win == x_lose){
        return("Opps! Almost");
    } else {
        return("U suck lol");
    }
}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
console.log(game());
//console.log(playRound(playerSelection, computerSelection));

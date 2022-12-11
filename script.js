function getComputerChoice() {
    let choiceComp = ["Rock", "Paper", "Scissors"];
    let rand = Math.floor(Math.random() * 3);
    return choiceComp[rand];
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection === playerSelection) {
        return ("We`re even");
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        return ("You win!");
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return ("You lose!");
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        return ("You win!");
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return ("You lose!");
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        return ("You win!");
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return ("You lose!");
    }
}

let x_win = 0;
let x_lose = 0;

function game() {
    if (arr.length < 5) {
        if (arr[arr.length-1] === "You win!") {
            x_win++;
        }
        else if (arr[arr.length-1] === "You lose!") {
            x_lose++;
        }

        document.querySelector('.score').innerHTML = `${x_win} - ${x_lose}`;

        return;
    } else {
        if (x_win > x_lose) {
            document.querySelector('.fiveRounds').innerHTML = "You are winner! Congratulations!";
            return "You are winner! Congratulations!";
        }
        else if (x_win == x_lose){
            document.querySelector('.fiveRounds').innerHTML = "Opps! Almost.";
            return "Opps! Almost";
        } else {
            document.querySelector('.fiveRounds').innerHTML = "U suck lol.";
            return "U suck lol";
        }

    }
}

const btns = document.querySelectorAll('.btn');
let n = 0;
let arr = [];

btns.forEach(btn => btn.addEventListener('click', function(e) {
    n++;
    let player = e.target.innerHTML;
    let computer = getComputerChoice();
    playRound(player, computer);
    const result = playRound(player, computer);
    document.querySelector('.showResults').innerHTML = result;

    arr.push(result);

    game();

    document.querySelector('.showRound').innerHTML = `Round ${n}`;

    if (n == 5) {
        let x = game();
        game();
        let q = confirm(`${x} Try again?`);
        if (q) {
            location.reload();
        }
    }
}));

document.querySelector('#reload').addEventListener('click', function() {
    location.reload();
})

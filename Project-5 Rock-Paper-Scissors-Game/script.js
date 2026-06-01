let userScore = 0;
let computerScore = 0;

function playGame(userChoice){

    const choices = ["Rock", "Paper", "Scissors"];

    const randomIndex = Math.floor(Math.random() * 3);

    const computerChoice = choices[randomIndex];

    document.getElementById("user-choice").textContent =
        "Your Choice: " + userChoice;

    document.getElementById("computer-choice").textContent =
        "Computer Choice: " + computerChoice;

    let result = "";

    if(userChoice === computerChoice){
        result = "It's a Draw!";
    }
    else if(
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ){
        result = "You Win!";
        userScore++;
    }
    else{
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("result").textContent = result;

    document.getElementById("user-score").textContent = userScore;

    document.getElementById("computer-score").textContent = computerScore;
}

function restartGame(){

    userScore = 0;
    computerScore = 0;

    document.getElementById("user-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;

    document.getElementById("result").textContent = "";
    document.getElementById("user-choice").textContent = "";
    document.getElementById("computer-choice").textContent = "";
}
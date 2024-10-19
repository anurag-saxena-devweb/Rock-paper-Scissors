let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
 
const msg = document.querySelector("#msg")
 
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");

const  genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"]
    Math.floor(Math.random() * 3);
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};
 
const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!"
    msg.style.backgroundColor = "#081b31";
};
 const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) { 
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        
        computerScore++;
        comScorePara.innerText = computerScore;
        msg.innerText = `You lose. ${computerChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
    }
 };

const playGame = (userChoice) => {
    console.log("user choice =", userChoice)
    const computerChoice = genComputerChoice();
    console.log("computerChoice = ", computerChoice)

    if (userChoice === computerChoice) {
        //Draw game
        drawGame();
    } else {
      let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "scissors") {
            // rock, papaer
            userWin = computerChoice === "rock" ? false : true;
        } else {
            // rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        }
        showWinner(userWin , userChoice , computerChoice);
    }

};
  
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});

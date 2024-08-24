let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");

const msg=document.querySelector(".msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice = () => {

    const options = ["rock", "paper", "scissors"];
    const choiceIdx = Math.floor(Math.random() * 3);
    return options[choiceIdx];

};

const showWiner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("You Win!")
        
        
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.background=(" #588157");
        msg.style.color=(" #fff");
        
    

    }
    else{
        console.log("You Lose");
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`You Lose ${compChoice} beats ${userChoice}`;
        msg.style.background=("#c1121f");
        msg.style.color=(" #fff");
        
        


    }

}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText="Game was Draw /play again";
    msg.style.background=("#9a8c98");
    msg.style.color=("#212529");
    msg.style.fontWeight=("bold");

    
}

const playGame = (userChoice) => {
    console.log("userChoice =", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice=", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper, scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice == "paper") {
            //rock scissor

            userWin = compChoice === "scissors" ? false : true;


        }
        else {
            //paper rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWiner(userWin,userChoice,compChoice);


    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);


    });
});
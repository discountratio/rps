const { random } = "mathjs";
const rps = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll(".btn");
const gameContainer = document.getElementById("rps");
const statusContainer = document.getElementById("status");
let userChoice = "";
let scoreUser = document.getElementById("user-score");
let scoreCpu = document.getElementById("cpu-score");
let largeUser = document.getElementById("user-large");
let largeCpu = document.getElementById("cpu-large");
let rockIcon = "<i class='fa fa-hand-rock-o'></i>";
let paperIcon = "<i class='fa fa-hand-paper-o'></i>";
let scissorsIcon = "<i class='fa fa-hand-scissors-o'></i>";

let scoreUserNum = 00;
let scoreCpuNum = 00;
let maxRounds = 5;

//can delete
function getComputerChoice() {
    rnum = Math.floor(Math.random() * 3);
    console.log("comp choice: " + rps[rnum]);
    return rps[rnum];
}
//can delete
function getUserChoiceText() {
    let userChoice = window.prompt("(R)ock, (P)aper, (S)cissors");
    userChoice = userChoice.toLowerCase();
    switch (userChoice) {
        case "r":
            userChoice = rps[0];
            break;
        case "p":
            userChoice = rps[1];
            break;
        case "s":
            userChoice = rps[2];
            break;
    }

    alert(userChoice);
    if (
        userChoice !== "rock" &&
        userChoice !== "paper" &&
        userChoice !== "scissors"
    ) {
        console.log("Please pick (R)ock, (P)aper, (S)cissors");
        getUserChoice();
    }
    console.log("user choice: " + userChoice);
    return userChoice;
}

//add click to each rps
document.querySelectorAll(".btn").forEach((item) => {
    item.addEventListener("click", (event) => {
        userChoice = item.classList[0];
        console.log("event listener: " + userChoice);
        game();
    });
});

//run game
function game(user) {
    user = userChoice;
    let comp = rps[Math.floor(Math.random() * 3)];
    largeUser.innerHTML = `<i class='fa fa-hand-${user}-o'></i>`;
    largeCpu.innerHTML = `<i class='fa fa-hand-${comp}-o'></i>`;

    //let comp = getComputerChoice();
    let victory = false;

    //Scenario - Tie
    if (user === comp) {
        console.log("tie");
        statusContainer.style["color"] = "#4444ff";
        (statusContainer.textContent = "Tie!")
    } else {
        //All other scenarios
        if (user == "rock") {
            victory = (comp == "scissors") ? true : false;
        }
        if (user == "paper") {
            victory = (comp == "rock") ? true : false;
        }
        if (user == "scissors") {
            victory = (comp == "paper") ? true : false;
        }

        if (victory == true) {
            scoreUserNum += 1;
            console.log("Victory! " + scoreUserNum + " | " + scoreCpuNum);
            statusContainer.style["color"] = "#44ff44";
        } else {
            scoreCpuNum += 1;
            console.log("Defeat! " + scoreUserNum + " | " + scoreCpuNum);
            statusContainer.style["color"] = "#ff8800";
        }
        victory == true
        ? (statusContainer.textContent = `Victory! ${user} beats ${comp}!`)
        : (statusContainer.textContent = `Defeat! ${comp} beats ${user}!`);
    }

  

    scoreUser.textContent = parseInt(scoreUserNum);
    scoreCpu.textContent = parseInt(scoreCpuNum);
}

const dice_btn = document.querySelector("button");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const winner_h1 = document.querySelector("h1");

const faces = [];
const dices = [dice1, dice2];

function game() {
  faces.length = 0;
  rollDices();
  getWinner();
}

function rollDices() {
  dices.map((dice) => {
    // iterate upon the random number to create
    dice.innerHTML = ""; // delete the previous state
    dice.className = "dice";
    randomGenerator(dice);
  });
}

// get random number between 1 to 6
function randomGenerator(parentDice) {
  const noOfFaces = Math.floor(Math.random() * 6) + 1;
  const eachDiceFaces = [];

  for (let i = 0; i < noOfFaces; i++) {
    const faceDiv = document.createElement("div");
    faceDiv.className = "face";

    parentDice.appendChild(faceDiv);
    parentDice.classList.add(`diceFace${noOfFaces}`);
    eachDiceFaces.push(faceDiv);
  }
  faces.push(eachDiceFaces);
}

// decide winner
function getWinner() {
  if (faces[0].length > faces[1].length) {
    winner_h1.innerText = "Player 1 Wins!";
  } else if (faces[0].length < faces[1].length) {
    winner_h1.innerText = "Player 1 Wins!";
  } else {
    winner_h1.innerText = "It's a draw!";
  }
}

dice_btn.addEventListener("click", game);

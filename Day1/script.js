const gameCells = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restartBtn = document.querySelector(".restartBtn");
const alertBox = document.querySelector(".alertBox");

//variable formation
let currentPlayer = "X";
let nextPlayer = "O";
let playerTurn = currentPlayer;

player1.textContent = `Player1 : ${currentPlayer}`;
player2.textContent = `Player2 : ${nextPlayer}`;

//function for starting game
const startGame = () => {
  gameCells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
};
const handleClick = (e) => {
  if (e.target.textContent == "") {
    e.target.textContent = playerTurn;
    if (checkWin()) {
      //   console.log(`${playerTurn} is a Winner!!!`);
      showAlert(`${playerTurn} is a Winner!!!`);
      disableCells();
    } else if (checkTie()) {
      showAlert(`It's a tie`);
      disableCells();
    } else {
      changePlayerTurn();
      showAlert(` Turn for player : ${playerTurn} `);
    }
  }
};
//function to create turn of another player
const changePlayerTurn = () => {
  //   if ((playerTurn = currentPlayer)) {
  //     playerTurn = nextPlayer;
  //   } else {
  //     playerTurn = currentPlayer;
  //   }
  playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
};
//function to check winning condition
const checkWin = () => {
  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCondition.length; i++) {
    const [pos1, pos2, pos3] = winningCondition[i];
    if (
      gameCells[pos1].textContent !== "" &&
      gameCells[pos1].textContent === gameCells[pos2].textContent &&
      gameCells[pos2].textContent === gameCells[pos3].textContent
    ) {
      return true;
    }
  }
  return false;
};
// function to check tie between players
const checkTie = () => {
  let emptyCellsCount = 0;
  gameCells.forEach((cell) => {
    if (cell.textContent === "") {
      emptyCellsCount++;
    }
  });
  return emptyCellsCount === 0 && !checkWin();
};

//function to disable gaming board
const disableCells = () => {
  gameCells.forEach((cell) => {
    cell.removeEventListener("click", handleClick);
    cell.classList.add("disabled");
  });
};

//function for restarting the game
const restartGame = () => {
  gameCells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("disabled");
  });
  startGame();
};
//function to pass message as a alert
const showAlert = (msg) => {
  alertBox.style.display = "block";
  alertBox.textContent = msg;
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);
};
restartBtn.addEventListener("click", restartGame);
startGame();

let currentPieces = null;
let playersOutput = document.getElementById('players');

function Pieces(rows, cols, color, isKing) {
  this.rows = rows;
  this.cols = cols;
  this.color = color;
  this.isKing = isKing;
}

function getNames() {
  let player1 = prompt('Player 1, escribe tu nombre:');
  if (!player1 || player1.trim() === '') {
    player1 = 'Player 1';
  } else {
    player1 = player1.trim();
  }

  let player2 = prompt('Player 2, escribe tu nombre:');
  if (!player2 || player2.trim() === '') {
    player2 = 'Player 2';
  } else {
    player2 = player2.trim();
  }

  const players = {
    player1: player1,
    player2: player2,
  };

  if (playersOutput) {
    playersOutput.textContent = `${players.player1} vs ${players.player2}`;
  }
}

window.addEventListener('load', () => {
  setTimeout(getNames, 100);
});

// checkers board as a 2D array without loops

// let board = [];
// for (let i = 0; i < 8; i++) {
//   board[i] = [];
//   for (let j = 0; j < 8; j++) {
//     board[i][j] = null;
//   }
// }

// for (let i = 0; i < 8; i++) {
//   for (let j = 0; j < 8; j++) {
//     if ((i + j) % 2 === 1) {
//       if (i < 3) {
//         board[i][j] = new Pieces(i, j, 'red', false);
//       } else if (i > 4) {
//         board[i][j] = new Pieces(i, j, 'gray', false);
//       }
//     }
//   }
// }

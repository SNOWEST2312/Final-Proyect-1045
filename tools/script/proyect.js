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

// checkers board as a 2D array without loops

let board = [
  [
    null,
    new Pieces(0, 1, 'red', false),
    null,
    new Pieces(0, 3, 'red', false),
    null,
    new Pieces(0, 5, 'red', false),
    null,
    new Pieces(0, 7, 'red', false),
  ],
  [
    new Pieces(1, 0, 'red', false),
    null,
    new Pieces(1, 2, 'red', false),
    null,
    new Pieces(1, 4, 'red', false),
    null,
    new Pieces(1, 6, 'red', false),
    null,
  ],
  [
    null,
    new Pieces(2, 1, 'red', false),
    null,
    new Pieces(2, 3, 'red', false),
    null,
    new Pieces(2, 5, 'red', false),
    null,
    new Pieces(2, 7, 'red', false),
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    new Pieces(5, 0, 'gray', false),
    null,
    new Pieces(5, 2, 'gray', false),
    null,
    new Pieces(5, 4, 'gray', false),
    null,
    new Pieces(5, 6, 'gray', false),
    null,
  ],
  [
    null,
    new Pieces(6, 1, 'gray', false),
    null,
    new Pieces(6, 3, 'gray', false),
    null,
    new Pieces(6, 5, 'gray', false),
    null,
    new Pieces(6, 7, 'gray', false),
  ],
  [
    new Pieces(7, 0, 'gray', false),
    null,
    new Pieces(7, 2, 'gray', false),
    null,
    new Pieces(7, 4, 'gray', false),
    null,
    new Pieces(7, 6, 'gray', false),
    null,
  ],
];

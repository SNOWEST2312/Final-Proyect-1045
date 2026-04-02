let currentPieces = null;
let playersOutput = document.getElementById('players');
let player1 = 'Player 1';
let player2 = 'Player 2';

function Pieces(rows, cols, color) {
  this.rows = rows;
  this.cols = cols;
  this.color = color;
  this.isKing = false;
}

function getNames() {
  let inputPlayer1 = prompt('Player 1, escribe tu nombre:');
  if (!inputPlayer1 || inputPlayer1.trim() === '') {
    player1 = 'Player 1';
  } else {
    player1 = inputPlayer1.trim();
  }

  let inputPlayer2 = prompt('Player 2, escribe tu nombre:');
  if (!inputPlayer2 || inputPlayer2.trim() === '') {
    player2 = 'Player 2';
  } else {
    player2 = inputPlayer2.trim();
  }

  const players = {
    player1: player1,
    player2: player2,
  };

  const banner1 = document.getElementById('banner1');
  const banner2 = document.getElementById('banner2');

  if (banner1) {
    banner1.textContent = ` ${players.player1}`;
  }
  if (banner2) {
    banner2.textContent = ` ${players.player2}`;
  }
  if (playersOutput) {
    playersOutput.textContent = '';
  }
}

window.addEventListener('load', () => {
  setTimeout(getNames, 100);
});

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

function Piece(row, col, color) {
  this.row = row;
  this.col = col;
  this.color = color;
  this.isKing = false;
}

let checkersBoard = [
  // row 0
  [
    null,
    new Piece(0, 1, 'red'),
    null,
    new Piece(0, 3, 'red'),
    null,
    new Piece(0, 5, 'red'),
    null,
    new Piece(0, 7, 'red'),
  ],
  // row 1
  [
    new Piece(1, 0, 'red'),
    null,
    new Piece(1, 2, 'red'),
    null,
    new Piece(1, 4, 'red'),
    null,
    new Piece(1, 6, 'red'),
    null,
  ],
  // row 2
  [
    null,
    new Piece(2, 1, 'red'),
    null,
    new Piece(2, 3, 'red'),
    null,
    new Piece(2, 5, 'red'),
    null,
    new Piece(2, 7, 'red'),
  ],
  // row 3
  [null, null, null, null, null, null, null, null],
  // row 4
  [null, null, null, null, null, null, null, null],
  // row 5
  [
    new Piece(5, 0, 'gray'),
    null,
    new Piece(5, 2, 'gray'),
    null,
    new Piece(5, 4, 'gray'),
    null,
    new Piece(5, 6, 'gray'),
    null,
  ],
  // row 6
  [
    null,
    new Piece(6, 1, 'gray'),
    null,
    new Piece(6, 3, 'gray'),
    null,
    new Piece(6, 5, 'gray'),
    null,
    new Piece(6, 7, 'gray'),
  ],
  // row 7
  [
    new Piece(7, 0, 'gray'),
    null,
    new Piece(7, 2, 'gray'),
    null,
    new Piece(7, 4, 'gray'),
    null,
    new Piece(7, 6, 'gray'),
    null,
  ],
];

document.addEventListener('DOMContentLoaded', () => {
  const banner1 = document.getElementById('banner1');
  const banner2 = document.getElementById('banner2');
  const canvas = document.getElementById('chessboard');

  if (banner1) {
    banner1.textContent = ` ${player1}`;
  }
  if (banner2) {
    banner2.textContent = ` ${player2}`;
  }

  drawBoard();
  drawPieces();

  if (canvas) {
    canvas.addEventListener('click', handleCanvasClick);
  } else {
    alert('Canvas not found');
  }
});

function drawBoard() {
  const canvas = document.getElementById('chessboard');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if ((row + col) % 2 === 0) {
        ctx.fillStyle = '#ffff';
      } else {
        ctx.fillStyle = '#000';
      }
      ctx.fillRect(col * 100, row * 100, 100, 100);
    }
  }
}

function drawPieces() {
  const canvas = document.getElementById('chessboard');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const squareSize = canvas.width / 8;
  const radius = 35;

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = checkersBoard[r][c];
      if (piece) {
        const cx = c * squareSize + squareSize / 2;
        const cy = r * squareSize + squareSize / 2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fillStyle = piece.color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

function handleCanvasClick(e) {
  const canvas = document.getElementById('chessboard');
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const squareSize = rect.width / 8;
  const col = Math.floor(x / squareSize);
  const row = Math.floor(y / squareSize);

  if (row < 0 || row > 7 || col < 0 || col > 7) return;
  console.log(`Row: ${row}, Col: ${col}`);
  alert(checkersBoard[row][col]);
}

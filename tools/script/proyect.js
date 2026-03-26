let playersOutput = document.getElementById('players');

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

let playerName = '';
let playerPosition = 0;

function startGame() {
  const input = document.getElementById('player-name');
  playerName = input.value.trim() || '플레이어';
  document.getElementById('player-name').disabled = true;
  alert(`${playerName}님, 게임을 시작합니다!`);
}

function rollDice() {
  if (!playerName) {
    alert('먼저 참가자 이름을 입력하고 게임을 시작하세요!');
    return;
  }
  const dice = Math.floor(Math.random() * 4) + 1;
  alert(`🎲 ${playerName}님의 주사위 결과: ${dice}`);
}

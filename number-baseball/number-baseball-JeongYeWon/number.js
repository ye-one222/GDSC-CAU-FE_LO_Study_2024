let randomNumbers = () => {
  let gameNum = [];
  while (gameNum.length < 3) {
    let num = Math.floor(Math.random() * 10);
    if (!gameNum.includes(num)) {
      gameNum.push(num);
    }
  }
  return gameNum;
}

function getResult(randomNumber, userNumbers) {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    if (userNumbers[i] === randomNumber[i]) {
      strikes++;
    } else if (randomNumber.includes(parseInt(userNumbers[i]))) {
      balls++;
    }
  }
  return { strikes, balls };
}

let attempts = 0;

function playGame() {
  let userGuess = document.getElementById('userGuess').value;
  if (userGuess.length !== 3 || isNaN(userGuess)) {
    document.getElementById('result').innerText = '유효한 세자리를 입력하세요.';
  }

  attempts++;
  let result = getResult(randomNumbers, userGuess);

  document.getElementById('attempts').innerText = `${attempts}번째 시도 : ${userGuess}`;
  document.getElementById('result').innerText = `${result.balls}B${result.strikes}S`;

  if (result.strikes === 3) {
    document.getElementById('result').innerText += `${attempts}번 만에 맞히셨습니다. 게임을 종료합니다.`;
    document.getElementById('userGuess').disabled = true;
  }
}
let getRandomNumbers = () => {
  let gameNum = [];
  while (gameNum.length < 3) {
    let num = Math.floor(Math.random() * 10);
    if (!gameNum.includes(num)) {
      gameNum.push(num);
    }
  }
  return gameNum;
}

let randomNumbers = getRandomNumbers();

let getResult = (randomNumbers, userNumbers) => {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    if (userNumbers[i] == randomNumbers[i]) {
      strikes++;
    } else if (randomNumbers.includes(parseInt(userNumbers[i]))) {
      balls++;
    }
  }
  return { strikes, balls };
}

let attempts = 0;

function playGame() {
  document.getElementById('answer').innerText = randomNumbers;  // 이스터에그..ㅎ

  let userGuess = document.getElementById('userGuess').value;
  if (userGuess.length !== 3 || isNaN(userGuess)) {
    document.getElementById('result').innerText = '유효한 세자리를 입력하세요.';
  }

  attempts++;
  let result = getResult(randomNumbers, userGuess);

  document.getElementById('attempts').innerText = `${attempts}번째 시도 : ${userGuess}`;
  document.getElementById('result').innerText = `${result.balls}B${result.strikes}S`;

  if (result.strikes === 3) {
    document.getElementById('result').innerText = `${attempts}번 만에 성공 👍`;
    document.getElementById('userGuess').disabled = true;
    document.getElementById('intputBtn').disabled = true;
  }
}

let initializeGame = () => {
  randomNumbers = getRandomNumbers();
  attempts = 0;
  document.getElementById('userGuess').value = '';
  document.getElementById('result').innerText = '';
  document.getElementById('attempts').innerText = '';
  document.getElementById('userGuess').disabled = false;
  document.getElementById('inputBtn').disabled = false;
}
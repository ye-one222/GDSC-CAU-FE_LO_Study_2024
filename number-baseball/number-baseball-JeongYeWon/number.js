function createRandomNumbers() {
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

  for (var i = 0; i < 3; i++) {
    if (userNumbers[i] === randomNumber[i]) {
      strikes++;
    } else if (randomNumber.includes(parseInt(userNumbers[i]))) {
      balls++;
    }
  }
  return { strikes, balls };
}
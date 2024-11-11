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
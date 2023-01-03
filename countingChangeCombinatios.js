// https://www.codewars.com/kata/541af676b589989aed0009e7

function countChange(money, coins) {

  if (!money) return 1;
  
  const iterations = Array.from(Array(coins.length), () => [1]);

  for (let i = 0; i < coins.length; i++) {

    for (let j = 1; j <= money; j++) {

      if (!i) {
        
        if(j % coins[i] === 0) {
          iterations[i].push(1);
        } else {
          iterations[i].push(0);
        }
      } else {

        if (coins[i] > j) {

          iterations[i].push(iterations[i-1][j]);
        } else {
          iterations[i].push(iterations[i-1][j] + iterations[i][j - coins[i]]);
        }
      }
    }
    if (i > 1) {
      iterations[i - 2] = [];
    }
  }

  return iterations.pop().pop();
}

module.exports = {
  countChange
}
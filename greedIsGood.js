// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function score(dice) {

  const diceCounter = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  for (let i = 0; i < dice.length; i++) {

    diceCounter[dice[i]]++;
  }

  let points = 0;

  for (const side in diceCounter) {

    if (diceCounter[side]) {

      points += pointCalculator(side, diceCounter[side]);
    }
  }
  return points;
}

function pointCalculator(side, apperances) {

  const pointRules = {
    single: {
      1: 100,
      5: 50,
    },
    triples: {
      1: 1000,
      2: 200,
      3: 300,
      4: 400,
      5: 500,
      6: 600
    }
  }

  if (apperances >= 3) {

    return pointRules.triples[side] + ((apperances - 3) * (pointRules.single[side] || 0));
  }

  return apperances * (pointRules.single[side] || 0);
}
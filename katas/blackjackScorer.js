// https://www.codewars.com/kata/534ffb35edb1241eda0015fe/train/javascript

function scoreHand(cards) {

  const score = {
    points: 0,
    aces: 0
  };

  for (let i = 0; i < cards.length; i++) {

    let currentCard = getCardPoints(cards[i]);

    score.points += currentCard.points;

    if (currentCard.ace) {
      score.aces++;
    }
  }

  if (score.points < 12 && score.aces > 0) {

    for (let i = 0; i < score.aces; i++) {

      if (score.points > 11) {
        break;
      }
      score.points += 10
    }
  }
  return score.points;
}

function getCardPoints(card) {

  if (cardIsNumeric(card)) {
    return {
      points: Number(card),
      ace: false
    };
  }

  if(card === "A") {
    return {
      points: 1,
      ace: true
    }
  }

  return {
    points: 10,
    ace: false
  }

}

function cardIsNumeric(card) {

  let cardNumber = Number(card)

  return !Number.isNaN(cardNumber)
}

module.exports = {
  scoreHand
}
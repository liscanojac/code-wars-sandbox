// https://www.codewars.com/kata/5739174624fc28e188000465/train/javascript
import { Hand, cardRankHierarchy, winnerHandsHierarchy, Result } from "../interfaces/rankingPokerHands";

export class PokerHand {
  readonly hand: string;
  readonly handValue: Hand;
  constructor(hand: string) {
    this.hand = hand;
    this.handValue = this.getHandValue(this.hand);
  }
  private getHandHelper(hand: string) {

    const handArr = hand.split(' ');

    handArr.sort((a: string, b: string) => {
      let aRank = a.charAt(0);
      let bRank = b.charAt(0);

      return cardRankHierarchy[bRank] - cardRankHierarchy[aRank];
    })

    let highestCardRank = handArr[0].charAt(0);

    const handHelper = {
      ranksSorted: handArr.map(card => card.charAt(0)),
      highestCard: {
        rank: highestCardRank,
        pack: handArr[0].charAt(1)
      },
      sequence: {
        isSequence: true,
        samePack: true,
      },
      packCounter: {
        S: 0,
        H: 0,
        D: 0,
        C: 0,
        flush: false
      },
      rankCounter: {
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        T: 0,
        J: 0,
        Q: 0,
        K: 0,
        A: 0
      }
    }

    for (let i = 0; i < handArr.length; i++) {

      let currentPack = handArr[i].charAt(1);
      let currentRank = handArr[i].charAt(0);

      handHelper.packCounter[currentPack]++;
      handHelper.rankCounter[currentRank]++;

      if (handHelper.packCounter[currentPack] === 5) {
        handHelper.packCounter.flush = true;
      }
      if (i && handHelper.sequence.isSequence) {
        handHelper.sequence.isSequence = cardRankHierarchy[handArr[i - 1].charAt(0)] - cardRankHierarchy[currentRank] === 1;
      }

      if (i && handHelper.sequence.samePack) {
        handHelper.sequence.samePack = handHelper.sequence.isSequence && handHelper.highestCard.pack === currentPack;
      }
    }
    return handHelper;
  };
  private getHandValue(hand: string): Hand {
    
    const handHelper = this.getHandHelper(hand);
    const result: Hand = {
      value: "high_card",
      highestCard: "",
    };

    if (handHelper.sequence.isSequence && handHelper.sequence.samePack) {

      if (handHelper.highestCard.rank === "A") {
        result.value = "royal_flush";
        result.highestCard = handHelper.ranksSorted[0];
        return result;
      }
      result.value = "straight_flush";
      result.highestCard = handHelper.ranksSorted[0];
      return result;
    }

    if (handHelper.packCounter.flush) {
      result.value = "flush";
      result.highestCard = handHelper.ranksSorted[0];
      result.remainingCards = handHelper.ranksSorted;
      return result;
    }
    if (handHelper.sequence.isSequence) {
      result.value = "straight";
      result.highestCard = handHelper.ranksSorted[0];
      return result
    }

    const groupsCounter = {
      four: {
        amount: 0,
        rank: ""
      },
      three: {
        amount: 0,
        rank: "",
      },
      two: {
        amount: 0,
        rank: [] as Array<string>
      }
    }

    for (const rank in handHelper.rankCounter) {

      if (handHelper.rankCounter[rank] === 4) {
        groupsCounter.four.amount++;
        groupsCounter.four.rank = rank;
        break;
      }
      if (handHelper.rankCounter[rank] === 3) {
        groupsCounter.three.amount++;
        groupsCounter.three.rank = rank;
      }
      if (handHelper.rankCounter[rank] === 2) {
        groupsCounter.two.amount++;
        groupsCounter.two.rank.push(rank);
      }
    }
    if (groupsCounter.four.amount > 0) {
      result.value = "four_of_a_kind";
      result.highestCard = groupsCounter.four.rank;
      result.remainingCards = handHelper.ranksSorted.filter(rank => rank !== groupsCounter.four.rank);
      return result;
    }
    if (groupsCounter.three.amount > 0 && groupsCounter.two.amount > 0) {
      result.value = "full_house";
      result.highestCard = groupsCounter.three.rank;
      result.secondHighestCard = groupsCounter.two.rank[0];
      return result;
    }
    if (groupsCounter.three.amount > 0) {
      result.value  = "three_of_a_kind";
      result.highestCard = groupsCounter.three.rank;
      result.remainingCards = handHelper.ranksSorted.filter(rank => rank !== groupsCounter.three.rank);
      return result;
    }
    if (groupsCounter.two.amount > 1) {
      result.value = "two_pair";
      result.highestCard = groupsCounter.two.rank[1];
      result.secondHighestCard = groupsCounter.two.rank[0];
      result.remainingCards = handHelper.ranksSorted.filter(rank => rank !== groupsCounter.two.rank[1] && rank !== groupsCounter.two.rank[0]);
      return result;
    }
    if (groupsCounter.two.amount > 0) {
      result.value = "pair";
      result.highestCard = groupsCounter.two.rank[0];
      result.remainingCards = handHelper.ranksSorted.filter(rank => rank !== groupsCounter.two.rank[0]);
      return result;
    }

    result.highestCard = handHelper.ranksSorted[0];
    result.remainingCards = handHelper.ranksSorted;
    return result;
  };
  compareWith(rival: PokerHand): number {

    if (this.handValue.value === rival.handValue.value) return this.concatAndCompare(rival);

    return winnerHandsHierarchy[this.handValue.value] > winnerHandsHierarchy[rival.handValue.value] ? Result.win : Result.loss;
  };
  private concatAndCompare(rival: PokerHand): number {
    const playerCardsToCompare: Array<string> = Array.prototype.concat(this.handValue.highestCard, this.handValue.secondHighestCard, this.handValue.remainingCards).filter((card: string | undefined) => card);
    const rivalCardsToCompare: Array<string> = Array.prototype.concat(rival.handValue.highestCard, rival.handValue.secondHighestCard, rival.handValue.remainingCards).filter((card: string | undefined) => card);

    return this.cardsComparisonLoop(playerCardsToCompare, rivalCardsToCompare);
  };
  private compareCards(playerCard: string, rivalCard: string): number {

    const hierarchies = {
      player: cardRankHierarchy[playerCard],
      rival: cardRankHierarchy[rivalCard]
    };
    if (hierarchies.player === hierarchies.rival) return Result.tie;

    return hierarchies.player > hierarchies.rival ? Result.win : Result.loss;
  };
  private cardsComparisonLoop(playerCardsArr: Array<string>, rivalCardsArr: Array<string>): number {

    for (let i = 0; i < playerCardsArr.length; i++) {

      if (playerCardsArr[i] !== rivalCardsArr[i]) {

        return this.compareCards(playerCardsArr[i], rivalCardsArr[i])
      }
    }
    return Result.tie;
  };
}
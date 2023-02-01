
type WinnerHandNames = "high_card" | "pair" | "two_pair" | "three_of_a_kind" | "straight" | "flush" | "full_house" | "four_of_a_kind" | "straight_flush" | "royal_flush";

type CardPacks = "S" | "H" | "D" | "C";

type CardRanks = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "T" | "J" | "Q" | "K" | "A";

type Hand = {
  value: WinnerHandNames;
  highestCard: string;
  secondHighestCard?: string;
  remainingCards?: Array<string>;
};

const cardRankHierarchy = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
};

const winnerHandsHierarchy = {
  high_card: 0,
  pair: 1,
  two_pair: 2,
  three_of_a_kind: 3,
  straight: 4,
  flush: 5,
  full_house: 6,
  four_of_a_kind: 7,
  straight_flush: 8,
  royal_flush: 9
};

const Result = {
  win: 1,
  loss: 2,
  tie: 3
};

export {
  Hand,
  cardRankHierarchy,
  winnerHandsHierarchy,
  Result
}
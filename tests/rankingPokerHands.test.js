import { PokerHand } from "../katas/rankingPokerHands";
import { Result } from "../interfaces/rankingPokerHands";

describe('Ranking Poker Hands kata', () => {
  
  test('Straight flush wins of 4 of a kind', () => {

    const hand = new PokerHand("2H 3H 4H 5H 6H");
    const rivalHand = new PokerHand("AS AD AC AH JD");

    expect(hand.compareWith(rivalHand)).toBe(Result.win);
  })

  test('Full house wins of flush', () => {

    const hand = new PokerHand("2S AH 2H AS AC");
    const rivalHand = new PokerHand("2H 3H 5H 6H 7H");

    expect(hand.compareWith(rivalHand)).toBe(Result.win);
  })

  test('Highest straight flush wins', () => {

    const hand = new PokerHand("2H 3H 4H 5H 6H");
    const rivalHand = new PokerHand("KS AS TS QS JS");

    expect(hand.compareWith(rivalHand)).toBe(Result.loss);
  })

  test('Highest card wins', () => {

    const hand = new PokerHand("4S 5H 6H TS AC");
    const rivalHand = new PokerHand("3S 5H 6H TS AC");

    expect(hand.compareWith(rivalHand)).toBe(Result.win);
  })

  test('Highest card loses', () => {

    const hand = new PokerHand("2S 3H 6H 7S 9C");
    const rivalHand = new PokerHand("7H 3C TH 6H 9S");

    expect(hand.compareWith(rivalHand)).toBe(Result.loss);
  })

  test('Pair wins over high card', () => {

    const hand = new PokerHand("2S AH 4H 5S KC");
    const rivalHand = new PokerHand("AH AC 5H 6H 7S");

    expect(hand.compareWith(rivalHand)).toBe(Result.loss);
  })

  test('Same pair, highest card wins', () => {

    const hand = new PokerHand("6S AD 7H 4S AS");
    const rivalHand = new PokerHand("AH AC 5H 6H 7S");

    expect(hand.compareWith(rivalHand)).toBe(Result.loss);
  })

  test('2 Pair wins of pair', () => {

    const hand = new PokerHand("2S 2H 4H 5S 4C");
    const rivalHand = new PokerHand("AH AC 5H 6H 7S");

    expect(hand.compareWith(rivalHand)).toBe(Result.win);
  })

  test('3 Of a kind wins of two pair', () => {

    const hand = new PokerHand("2S 2H 4H 5S 4C");
    const rivalHand = new PokerHand("AH AC 5H 6H AS");

    expect(hand.compareWith(rivalHand)).toBe(Result.loss);
  })

  test('Straight wins of three of a kind', () => {

    const hand = new PokerHand("2S 3H 4H 5S 6C");
    const rivalHand = new PokerHand("AH AC 5H 6H AS");

    expect(hand.compareWith(rivalHand)).toBe(Result.win);
  });
  
})
const { scoreHand } = require('../blackjackScorer')

describe('blackjackScorer codeWars kata', () => {

  test('testing basic cards A', () => {

    expect(scoreHand(["A"])).toBe(11);
  })

  test('testing basic cards A && J', () => {

    expect(scoreHand(["A", "J"])).toBe(21);
  })

  test('testing A-10-A', () => {

    expect(scoreHand(["A", "10", "A"])).toBe(12);
  })

  test('testing 5-3-7', () => {

    expect(scoreHand(["5", "3", "7"])).toBe(15);
  })

  test('testing 5-4-3-2-A-K', () => {

    expect(scoreHand(["5", "4", "3", "2", "A", "K"])).toBe(25);
  })

  test('testing A-2-A-9-9', () => {

    expect(scoreHand(["A", "2", "A", "9", "9"])).toBe(22);
  })
})
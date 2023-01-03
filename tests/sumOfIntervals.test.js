const { sumIntervals } = require('../sumOfIntervals')

describe('Sum of Intervals codewars kata non-overlapping intervals', () => {

  test('it should return 4', () => {

    expect(sumIntervals([[1,5]])).toBe(4)
  })

  test('it should return 8', () => {

    expect(sumIntervals([[1,5],[6,10]])).toBe(8)
  })

  test('it should return 9', () => {

    expect(sumIntervals([[1,2], [6, 10], [11, 15]])).toBe(9)
  })

  test('it should return 7', () => {

    expect(sumIntervals([[1,4], [7, 10], [3, 5]])).toBe(7)
  })

  test('it should return 19', () => {

    expect(sumIntervals([[1,5], [10, 20], [1, 6], [16, 19], [5, 11]])).toBe(19)
  })

  test('it should return 100000030', () => {

    expect(sumIntervals([[0, 20], [-100000000, 10], [30, 40]])).toBe(100000030)
  })
})

describe('Sum of Intervals codewars kata overlapping intervals', () => {

  test('it should return 4', () => {

    expect(sumIntervals([[1,5],[1,5]])).toBe(4)
  })

  test('it should return 7', () => {

    expect(sumIntervals([[1,4],[7, 10],[3, 5]])).toBe(7)
  })
})

describe('Sum of Intervals codewars kata large intervals', () => {

  test('it should return 2e9', () => {

    expect(sumIntervals([[-1e9, 1e9]])).toBe(2e9)
  })

  test('it should return 1e8 + 30', () => {

    expect(sumIntervals([[0, 20], [-1e8, 10], [30, 40]])).toBe(1e8 + 30)
  })
})
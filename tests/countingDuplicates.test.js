const { duplicateCount } = require('../countingDuplicates')

describe('duplicateCount codeWars kata', () => {

  test('It should return 0 with an empty string', () => {

    expect(duplicateCount('')).toBe(0);
  })

  test('It should return 0 with no repeated characters', () => {

    expect(duplicateCount('abcde')).toBe(0);
  })

  test('It should return 2 with two repeated characters', () => {

    expect(duplicateCount('aabbcde')).toBe(2);
  })

  test('It should not be case sensitive', () => {

    expect(duplicateCount('aabBcde')).toBe(2);
  })

  test('it should count just by occurences', () => {

    expect(duplicateCount('Indivisibility')).toBe(1);
  })

  test('characters may not repeat the same number of times', () => {

    expect(duplicateCount('Indivisibilities')).toBe(2);
  })
})
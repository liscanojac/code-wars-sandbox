const { isMerge } = require('../mergedStringChecker');

describe('Merged String Checker codewars kata', () => {

  test('returns true', () => {

    expect(isMerge('codewars', 'code', 'wars')).toBe(true);
  })
  test('returns true', () => {

    expect(isMerge('codewars', 'code', 'wasr')).toBe(true);
  })
})
const { countChange } = require('../countingChangeCombinatios')

describe('Counting change combinations codewars kata', () => {

  test('it should return 3 combinations', () => {

    expect(countChange(4, [1, 2])).toBe(3);
  })

  test('it should return 1 combinations', () => {

    expect(countChange(0, [1, 2])).toBe(1);
  })

  test('it should return 4 combinations', () => {

    expect(countChange(10, [5, 2, 3])).toBe(4);
  })
  
  test('it should return 0 combinations', () => {

    expect(countChange(11, [5, 7])).toBe(0);
  })

  test('it should return 1022 combinations', () => {

    expect(countChange(300, [5, 10, 20, 50, 100, 200, 500])).toBe(1022);
  })
})
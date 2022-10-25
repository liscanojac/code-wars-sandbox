const { smaller, smaller2 } = require('../howManyAreSmallerThanMe');

describe('How many are smaller than me kata', () => {

  test('[5, 4, 3, 2, 1]', () => {

    expect(smaller([5, 4, 3, 2, 1])).toEqual([4, 3, 2, 1, 0])
  })
  test('[1, 2, 3]', () => {

    expect(smaller([1, 2, 3])).toEqual([0, 0, 0])
  })
  test('[1, 2, 0]', () => {

    expect(smaller([1, 2, 0])).toEqual([1, 1, 0])
  })
  test('[1, 2, 1]', () => {

    expect(smaller([1, 2, 1])).toEqual([0, 1, 0])
  })
  test('[1, 1, -1, 0, 0]', () => {

    expect(smaller([1, 1, -1, 0, 0])).toEqual([3, 3, 0, 0, 0])
  })
  test('[5, 4, 7, 9, 2, 4, 4, 5, 6]', () => {

    expect(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])).toEqual([4, 1, 5, 5, 0, 0, 0, 0, 0])
  })
})

describe('How many are smaller than me II kata', () => {

  test('[5, 4, 3, 2, 1]', () => {

    expect(smaller2([5, 4, 3, 2, 1])).toEqual([4, 3, 2, 1, 0])
  })
  test('[1, 2, 3]', () => {

    expect(smaller2([1, 2, 3])).toEqual([0, 0, 0])
  })
  test('[1, 2, 0]', () => {

    expect(smaller2([1, 2, 0])).toEqual([1, 1, 0])
  })
  test('[1, 2, 1]', () => {

    expect(smaller2([1, 2, 1])).toEqual([0, 1, 0])
  })
  test('[1, 1, -1, 0, 0]', () => {

    expect(smaller2([1, 1, -1, 0, 0])).toEqual([3, 3, 0, 0, 0])
  })
  test('[5, 4, 7, 9, 2, 4, 4, 5, 6]', () => {

    expect(smaller2([5, 4, 7, 9, 2, 4, 4, 5, 6])).toEqual([4, 1, 5, 5, 0, 0, 0, 0, 0])
  })
})
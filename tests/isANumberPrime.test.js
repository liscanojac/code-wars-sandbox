const { isPrime } = require('../isANumberPrime')

describe('isANumberPrime codewars kata', () => {

  test('it returns false with 0', () => {

    expect(isPrime(0)).toBe(false);
  })

  test('it returns false with 1', () => {

    expect(isPrime(1)).toBe(false);
  })
  
  test('it returns true with 2', () => {

    expect(isPrime(2)).toBe(true);
  })

  test('it returns true with 73', () => {

    expect(isPrime(73)).toBe(true);
  })

  test('it returns false with -1', () => {

    expect(isPrime(-1)).toBe(false);
  })
})
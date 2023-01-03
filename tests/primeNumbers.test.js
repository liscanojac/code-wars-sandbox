const { isPrime, getPrimes } = require('../primeNumbers')

describe('primerNumbers isPrime function codewars kata', () => {

  test('it returns false with 0', () => {

    expect(isPrime(0)).toBe(false);
  })

  test('it returns false with 1', () => {

    expect(isPrime(1)).toBe(false);
  })
  
  test('it returns true with 2', () => {

    expect(isPrime(2)).toBe(true);
  })

  test('it returns true with 3', () => {

    expect(isPrime(3)).toBe(true);
  })

  test('it returns false with 4', () => {

    expect(isPrime(4)).toBe(false);
  })

  test('it returns true with 5', () => {

    expect(isPrime(5)).toBe(true);
  })

  test('it returns true with 73', () => {

    expect(isPrime(73)).toBe(true);
  })

  test('it returns false with -1', () => {

    expect(isPrime(-1)).toBe(false);
  })
})

describe('primeNumber getPrimes function codewars kata', () => {

  test('it returns an empty array', () => {

    expect(getPrimes(0, 0)).toEqual([]);
  })

  test('it returns an empty array', () => {

    expect(getPrimes(0, 30)).toEqual([2,3,5,7,11,13,17,19,23,29]);
  })

  test('it returns an empty array', () => {

    expect(getPrimes(30, 0)).toEqual([2,3,5,7,11,13,17,19,23,29]);
  })
})
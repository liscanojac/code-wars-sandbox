import { isInteresting } from "../katas/mileageNumbers";

describe('Catching Car mileage numbers kata', () => {

  const awesomePhrasesOne = [1337, 256];
  const noneAwesomePhrases = [];
  
  test('less than 100 arent interesting', () => {

    expect(isInteresting(3, awesomePhrasesOne)).toBe(0);
  })

  test('3236 isnt interesting', () => {

    expect(isInteresting(3236, awesomePhrasesOne)).toBe(0);
  })

  test('11207 isnt interesting', () => {

    expect(isInteresting(11207, noneAwesomePhrases)).toBe(0);
  })

  test('11208 isnt interesting', () => {

    expect(isInteresting(11208, noneAwesomePhrases)).toBe(0);
  })

  test('11209 is interesting', () => {

    expect(isInteresting(11209, noneAwesomePhrases)).toBe(1);
  })

  test('11210 is interesting', () => {

    expect(isInteresting(11210, noneAwesomePhrases)).toBe(1);
  })

  test('11211 is interesting', () => {

    expect(isInteresting(11211, noneAwesomePhrases)).toBe(2);
  })

  test('1335 is an awesome phrase', () => {

    expect(isInteresting(1335, awesomePhrasesOne)).toBe(1);
  })

  test('1336 is an awesome phrase', () => {

    expect(isInteresting(1336, awesomePhrasesOne)).toBe(1);
  })

  test('1337 is an awesome phrase', () => {

    expect(isInteresting(1337, awesomePhrasesOne)).toBe(2);
  })

  test('1000 is interesting', () => {

    expect(isInteresting(1000, noneAwesomePhrases)).toBe(2);
  })

  test('998 is interesting', () => {

    expect(isInteresting(998, noneAwesomePhrases)).toBe(1);
  })
  test('999 is interesting', () => {

    expect(isInteresting(999, noneAwesomePhrases)).toBe(2);
  })

  test('789012 is interesting', () => {

    expect(isInteresting(7890, noneAwesomePhrases)).toBe(2);
  })
  test('789010 is interesting', () => {

    expect(isInteresting(7889, noneAwesomePhrases)).toBe(1);
  })

  test('1221 is interesting', () => {

    expect(isInteresting(1221, noneAwesomePhrases)).toBe(2);
  })

  test('1219 is interesting', () => {

    expect(isInteresting(1219, noneAwesomePhrases)).toBe(1);
  })

  test('73837 is interesting', () => {

    expect(isInteresting(73837, noneAwesomePhrases)).toBe(2);
  })
  test('73836 is interesting', () => {

    expect(isInteresting(73836, noneAwesomePhrases)).toBe(1);
  })
  test('21098 is interesting', () => {

    expect(isInteresting(210, noneAwesomePhrases)).toBe(2);
  })
  test('21097 is interesting', () => {

    expect(isInteresting(208, noneAwesomePhrases)).toBe(1);
  })
  test('98 is interesting', () => {

    expect(isInteresting(98, noneAwesomePhrases)).toBe(1);
  })
})
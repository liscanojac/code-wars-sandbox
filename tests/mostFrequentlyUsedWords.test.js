const { topThreeWords } = require('../mostFrequentlyUsedWords')

describe('Most frequently used words in a text codewars kata', () => {

  test(`expects to return ['e','d','a']`, () => {

    expect(topThreeWords("a a a  b  c c  d d d d  e e e e e")).toEqual(['e','d','a']);
  })

  test(`expects to return ['a','b','c']`, () => {

    expect(topThreeWords("a a c b b")).toEqual(['a','b','c']);
  })

  test(`expects to return ['e','ddd','aa']`, () => {

    expect(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")).toEqual(['e','ddd','aa']);
  })

  test(`expects to return ["won't", "wont"]`, () => {

    expect(topThreeWords("  //wont won't won't ")).toEqual(["won't", "wont"]);
  })

  test(`expects to return ["e"]`, () => {

    expect(topThreeWords("  , e   .. ")).toEqual(["e"]);
  })

  test(`expects to return ["e"]`, () => {

    expect(topThreeWords("  , e   .. ")).toEqual(["e"]);
  })

  test(`expects to return []`, () => {

    expect(topThreeWords("  ...  ")).toEqual([]);
  })

  test(`expects to return []`, () => {

    expect(topThreeWords("  '  ")).toEqual([]);
  })

  test(`expects to return []`, () => {

    expect(topThreeWords("  '   '  ")).toEqual([]);
  })

  test(`expects to return []`, () => {

    expect(topThreeWords("  ''''   '''  ")).toEqual([]);
  })

  test(`expects to return []`, () => {

    expect(topThreeWords("  '''''''  ")).toEqual([]);
  })

  test(`expects to return ['a','of','on']`, () => {

    expect(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays,and a pigeon or so extra on Sundays, made away with three-quarters of his income.`)).toEqual(['a','of','on']);
  })
})
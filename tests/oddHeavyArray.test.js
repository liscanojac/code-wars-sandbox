import { isOddHeavy } from "../katas/oddHeavyArray";

describe('isOddHeavy codewars kata', () => {

  test('the sample array is oddHeavy', () => {

    expect(isOddHeavy([0,2,19,4,4])).toBe(true);
  })

  test('the sample array is oddHeavy', () => {

    expect(isOddHeavy([1,-2,-1,2])).toBe(false);
  })
})
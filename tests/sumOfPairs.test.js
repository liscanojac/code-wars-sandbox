import { sum_pairs } from "../sumOfPairs";

describe('Sum of Pairs kata', () => {

  test('It should return [3, 7]', () => {

    expect(sum_pairs([11, 3, 7, 5], 10)).toEqual([3, 7]);
  })

  test('It should return [4, 2]', () => {

    expect(sum_pairs([4, 3, 2, 3, 4], 6)).toEqual([4, 2]);
  })

  test('It should return undefined', () => {

    expect(sum_pairs([0, 0, -2, 3], 2)).toEqual(undefined);
  })

  test('It should return [3, 7]', () => {

    expect(sum_pairs([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 7]);
  })
})
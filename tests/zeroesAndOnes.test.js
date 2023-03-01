import { replaceZeroes } from "../katas/zeroesAndOnes";

describe('Zeroes and ones kata', () => {

  test('should return 10', () => {

    expect(replaceZeroes([1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1])).toBe(10);
  })

  test('should return 5', () => {

    expect(replaceZeroes([1,1,0,1,1,0,1,1])).toBe(5);
  })

  test('should return 6', () => {

    expect(replaceZeroes([1,1,1,0,1,1,0,1,1,1])).toBe(6);
  })

  test('should return 0', () => {

    expect(replaceZeroes([0,1,1,1])).toBe(0);
  })

  test('should return 3', () => {

    expect(replaceZeroes([1,1,1,0])).toBe(3);
  })

  test('should return 3', () => {

    expect(replaceZeroes([1,1,1,0,0])).toBe(3);
  })

  test('should return 4', () => {

    expect(replaceZeroes([0,1,1,1,0,0])).toBe(4);
  })

  test('should return 10', () => {

    expect(replaceZeroes([1,1,1,0,0,1,1,1,1,1,0,1])).toBe(10);
  })

  test('should return 2', () => {

    expect(replaceZeroes([0,1,0,0,0,0])).toBe(2);
  })
})
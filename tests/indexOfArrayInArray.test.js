import { indexOf } from "../katas/indexOfArrayInArray";

describe('IndexOf Array in Array kata', () => {

  test('query is in index 0', () => {

    expect(indexOf([[1,2],[3,4],[5,6]], [1,2])).toBe(0);
  })

  test('array throws an error', () => {

    expect(() => indexOf([[1,2],[3,4],[5,6],[7,8,9]], [1,2])).toThrow();
  })

  test('array throws an error', () => {

    expect(() => indexOf([1,2,3,4,5,6], [1,2])).toThrow();
  })

  test('query throws an error', () => {

    expect(() => indexOf([[1,2],[3,4],[5,6]], 5)).toThrow();
  })
})
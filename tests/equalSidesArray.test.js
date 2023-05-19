import { arrayEqualSidesIndex } from "../katas/equalSidesArray";

describe('Equal Sides Of An Array kata', () => {

  test('is equal on index 3', () => {

    expect(arrayEqualSidesIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3);
  });

  test('is equal on index 1', () => {

    expect(arrayEqualSidesIndex([1, 100, 50, -51, 1, 1])).toBe(1);
  });

  test('is equal on index 0', () => {

    expect(arrayEqualSidesIndex([20,10,-80,10,10,15,35])).toBe(0);
  });
})
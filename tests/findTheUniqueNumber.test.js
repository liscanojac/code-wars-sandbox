import { findUnique } from "../katas/findTheUniqueNumber";

describe('Finde the unique number kata', () => {

  test('return 1 as unique value', () => {

    expect(findUnique([ 1, 0, 0 ])).toBe(1);
  });

  test('return 1 as unique value', () => {

    expect(findUnique([ 0, 1, 0 ])).toBe(1);
  });

  test('return 1 as unique value', () => {

    expect(findUnique([ 0, 0, 1 ])).toBe(1);
  });

  test('return 2 as unique value', () => {

    expect(findUnique([ 1, 1, 1, 2, 1, 1 ])).toBe(2);
  });
  
})
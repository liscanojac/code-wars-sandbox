import { argumentsDuplicated } from "../katas/duplicateArguments";

describe('Duplicated arguments kata', () => {

  test('First test', () => {

    expect(argumentsDuplicated(1, 2, 3)).toBe(false);
  });

  test('Second test', () => {

    expect(argumentsDuplicated(1, 2, 3, 6, 5, 6)).toBe(true);
  });

  test('Third test', () => {

    expect(argumentsDuplicated('a','b','c','a')).toBe(true);
  });

  test('Fourth test', () => {

    expect(argumentsDuplicated(1, 2, 3, 'a', 'b')).toBe(false);
  });
})
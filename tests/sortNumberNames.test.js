import { getNumberName, sortNumberNames } from "../katas/sortNumberNames";

describe('getNumberName function', () => {

  test('0', () => {
    expect(getNumberName(0)).toBe('zero');
  });

  test('1', () => {
    expect(getNumberName(1)).toBe('one');
  });

  test('2', () => {
    expect(getNumberName(2)).toBe('two');
  });

  test('3', () => {
    expect(getNumberName(3)).toBe('three');
  });

  test('10', () => {
    expect(getNumberName(10)).toBe('ten');
  });

  test('17', () => {
    expect(getNumberName(17)).toBe('seventeen');
  });

  test('20', () => {
    expect(getNumberName(20)).toBe('twenty');
  });

  test('60', () => {
    expect(getNumberName(60)).toBe('sixty');
  });

  test('90', () => {
    expect(getNumberName(90)).toBe('ninety');
  });

  test('21', () => {
    expect(getNumberName(21)).toBe('twenty one');
  });

  test('55', () => {
    expect(getNumberName(55)).toBe('fifty five');
  });

  test('99', () => {
    expect(getNumberName(99)).toBe('ninety nine');
  });

  test('100', () => {
    expect(getNumberName(100)).toBe('one hundred');
  });

  test('900', () => {
    expect(getNumberName(900)).toBe('nine hundred');
  });

  test('101', () => {
    expect(getNumberName(101)).toBe('one hundred one');
  });

  test('555', () => {
    expect(getNumberName(555)).toBe('five hundred fifty five');
  });

  test('872', () => {
    expect(getNumberName(872)).toBe('eight hundred seventy two');
  });
});

describe('sortNumberNames function', () => {

  test('[8, 8, 9, 9, 10, 10]', () => {

    expect(sortNumberNames([8, 8, 9, 9, 10, 10])).toEqual([8, 8, 9, 9, 10, 10]);
  });

  test('[1, 2, 3, 4]', () => {

    expect(sortNumberNames([1, 2, 3, 4])).toEqual([4, 1, 3, 2]);
  });

  test('[9, 99, 999]', () => {

    expect(sortNumberNames([9, 99, 999])).toEqual([9, 999, 99]);
  });
})
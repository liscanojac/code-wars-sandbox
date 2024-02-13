import { onlyDuplicates, onlyDuplicates2 } from "../katas/onlyDuplicates";

describe('Only duplicates kata', () => {

  test('testing abccdefee', () => {

    expect(onlyDuplicates('abccdefee')).toBe('cceee');
  });

  test('testing hello', () => {

    expect(onlyDuplicates('hello')).toBe('ll');
  });

  test('testing colloquial', () => {

    expect(onlyDuplicates('colloquial')).toBe('ollol');
  });

  test('testing foundersandcoders', () => {

    expect(onlyDuplicates('foundersandcoders')).toBe('ondersndoders');
  });
})

describe('Only duplicates kata best solution', () => {

  test('testing abccdefee', () => {

    expect(onlyDuplicates2('abccdefee')).toBe('cceee');
  });

  test('testing hello', () => {

    expect(onlyDuplicates2('hello')).toBe('ll');
  });

  test('testing colloquial', () => {

    expect(onlyDuplicates2('colloquial')).toBe('ollol');
  });

  test('testing foundersandcoders', () => {

    expect(onlyDuplicates2('foundersandcoders')).toBe('ondersndoders');
  });
})
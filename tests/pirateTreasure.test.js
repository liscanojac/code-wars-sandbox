import { 
  getCommonDivisor, 
  PirateCode,
  isNumeric, 
  getTreasureCode 
} from "../katas/pirateTreasure";

describe('isNumeric test suite', () => {

  test(`testing with '123'`, () => {

    expect(isNumeric('123')).toBe(true);
  });

  test(`testing with '123abc'`, () => {

    expect(isNumeric('123abc')).toBe(false);
  });

  test(`testing with 5`, () => {

    expect(isNumeric(5)).toBe(true);
  });

  test(`testing with 'q345'`, () => {

    expect(isNumeric('q345')).toBe(false);
  });

  test(`testing with null`, () => {

    expect(isNumeric(null)).toBe(false);
  });

  test(`testing with undefined`, () => {

    expect(isNumeric(undefined)).toBe(false);
  });

  test(`testing with false`, () => {

    expect(isNumeric(false)).toBe(false);
  });

  test(`testing with ''`, () => {

    expect(isNumeric('')).toBe(false);
  });

  test(`testing with '    '`, () => {

    expect(isNumeric('    ')).toBe(false);
  });
});

describe('getCodeArray test suite', () => {

  test(`testing with 'A2B4C6'`, () => {

    const code = new PirateCode('A2B4C6');
    expect(code.arr).toEqual(['A', '2', 'B', '4', 'C', '6']);
  });
  test(`testing with 'T3Y3U9E6'`, () => {

    const code = new PirateCode('T3Y3U9E6');
    expect(code.arr).toEqual(['T', '3', 'Y', '3', 'U', '9', 'E', '6']);
  });
  test(`testing with 'M3H7'`, () => {

    const code = new PirateCode('M3H7');
    expect(code.arr).toEqual(['M', '3', 'H', '7']);
  });
  test(`testing with 'Y14U7I7P21'`, () => {

    const code = new PirateCode('Y14U7I7P21');
    expect(code.arr).toEqual(['Y', '14', 'U', '7', 'I', '7', 'P', '21']);
  });
  test(`testing with '564Y14U7IAM7P21'`, () => {

    const code = new PirateCode('564Y14U7IAM7P21');
    expect(code.arr).toEqual(['564', 'Y', '14', 'U', '7', 'IAM', '7', 'P', '21']);
  });
  test(`testing with '564Y14U7IAM7P21'`, () => {

    const code = new PirateCode('564Y14U7IAM7P21ZZZ');
    expect(code.arr).toEqual(['564', 'Y', '14', 'U', '7', 'IAM', '7', 'P', '21', 'ZZZ']);
  });
});

describe('getCommonDivisor test suite', () => {

  test(`testing with 'A2B4C6'`, () => {

    const numericArray = new PirateCode('A2B4C6').numericArray;

    expect(getCommonDivisor(numericArray)).toBe(2);
  });
  test(`testing with 'T3Y3U9E6'`, () => {

    const numericArray = new PirateCode('T3Y3U9E6').numericArray;

    expect(getCommonDivisor(numericArray)).toBe(3);
  });
  test(`testing with 'M3H7'`, () => {

    const numericArray = new PirateCode('M3H7').numericArray;

    expect(getCommonDivisor(numericArray)).toBe(1);
  });
  test(`testing with 'Y14U7I7P21'`, () => {

    const numericArray = new PirateCode('Y14U7I7P21').numericArray;

    expect(getCommonDivisor(numericArray)).toBe(7);
  });
});

describe('getTreasureCode test suite', () => {

  test(`testing with 'A2B4C6'`, () => {

    expect(getTreasureCode('A2B4C6')).toBe('A1B2C3')
  });
  test(`testing with 'T3Y3U9E6'`, () => {

    expect(getTreasureCode('T3Y3U9E6')).toBe('T1Y1U3E2')
  });
  test(`testing with 'M3H7'`, () => {

    expect(getTreasureCode('M3H7')).toBe('M3H7')
  });
  test(`testing with 'Y14U7I7P21'`, () => {

    expect(getTreasureCode('Y14U7I7P21')).toBe('Y2U1I1P3')
  });
})
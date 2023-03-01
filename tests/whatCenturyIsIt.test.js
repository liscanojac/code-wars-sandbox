import { whatCentury } from "../katas/whatCenturyIsIt";

describe('What century is it kata', () => {

  test('1999 is 20th', () => {

    expect(whatCentury('1999')).toBe('20th')
  })
  test('2011 is 21st', () => {

    expect(whatCentury('2011')).toBe('21st')
  })
})
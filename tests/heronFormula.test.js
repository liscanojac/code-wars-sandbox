import { heronFormula } from "../katas/heronFormula";

describe('Heron Formula kata', () => {

  test('Triangle with sides 3, 4, and 5', () => {

    expect(heronFormula(3, 4, 5)).toBe(6);
  })

  test('Equilateral triangle with sides of length 4', () => {

    expect(heronFormula(4, 4, 4)).toBe(Math.sqrt(3) * 4);
  })
})
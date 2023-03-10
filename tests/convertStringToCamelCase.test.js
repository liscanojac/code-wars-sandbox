import { toCamelCase } from "../katas/convertStringToCamelCase";

describe('Convert string to camel case kata', () => {

  test('converting an empty string', () => {

    expect(toCamelCase('')).toBe('');
  })

  test('converting the_stealth_warrior', () => {

    expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior');
  })

  test('converting The-Stealth-Warrior', () => {

    expect(toCamelCase('The-Stealth-Warrior')).toBe('TheStealthWarrior');
  })

  test('converting The-Stealth-Warrior', () => {

    expect(toCamelCase('The-Stealth-Warrior')).toBe('TheStealthWarrior');
  })

  test('converting A-B-C', () => {

    expect(toCamelCase('A-B-C')).toBe('ABC');
  })
})
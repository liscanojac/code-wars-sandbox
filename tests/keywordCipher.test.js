import { cipher } from "../katas/keywordCipher";

describe('Keyword Cipher kata', () => {

  test('encipting hello', () => {

    expect(cipher('hello', 'wednesday')).toBe('bshhk');
  })

  test('encipting Welcome home', () => {

    expect(cipher('Welcome home', 'secret')).toBe('wticljt dljt');
  })

  test('encipting HELLO', () => {

    expect(cipher('HELLO', 'wednesday')).toBe('bshhk');
  })

  test('encipting HeLlO', () => {

    expect(cipher('HeLlO', 'wednesday')).toBe('bshhk');
  })

  test('encipting WELCOME HOME', () => {

    expect(cipher('WELCOME HOME', 'gridlocked')).toBe('wlfimhl kmhl');
  })

  test('encipting alpha bravo charlie', () => {

    expect(cipher('alpha bravo charlie', 'delta')).toBe('djofd eqdvn lfdqjga');
  })

  test('encipting Home Base', () => {

    expect(cipher('Home Base', 'seven')).toBe('dlja esqa');
  })

  test('encipting one two three', () => {

    expect(cipher('one two three', 'rails')).toBe('mks twm tdpss');
  })

  test('encipting Test', () => {

    expect(cipher('Test', 'unbuntu')).toBe('raqr');
  })
})
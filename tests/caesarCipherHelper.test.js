import { CaesarCipher } from "../caesarCipherHelper";

describe('Caesar Cipher Helper kata', () => {

  const caesarCipher = new CaesarCipher(5);

  test('encode Codewars', () => {

    expect(caesarCipher.encode('Codewars')).toBe('HTIJBFWX');
  });
  test('encode Codewars', () => {

    expect(caesarCipher.decode('BFKKQJX')).toBe('WAFFLES');
  });
})
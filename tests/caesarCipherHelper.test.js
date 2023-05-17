import { CaesarCipher, encode, decode } from "../katas/caesarCipherHelper";

describe('Caesar Cipher Helper kata', () => {

  const caesarCipher = new CaesarCipher(5);

  test('encode Codewars', () => {

    expect(caesarCipher.encode('Codewars')).toBe('HTIJBFWX');
  });
  test('decode BFKKQJX', () => {

    expect(caesarCipher.decode('BFKKQJX')).toBe('WAFFLES');
  });
})

describe('Second Variation on Caesar Cipher', () => {

  test('encode testMessage', () => {

    expect(encode("I should have known that you would have a perfect answer for me!!!", 1)).toEqual(['ijJ tipvme ibw', 'f lopxo uibu z', 'pv xpvme ibwf ', 'b qfsgfdu botx', 'fs gps nf!!!'])
  });

  test('decode testMessage', () => {

    expect(decode(['ijJ tipvme ibw', 'f lopxo uibu z', 'pv xpvme ibwf ', 'b qfsgfdu botx', 'fs gps nf!!!'])).toBe("I should have known that you would have a perfect answer for me!!!")
  });

  test('encode testMessage', () => {

    expect(encode("abcdefghjuty12", 1)).toEqual(['abbc', 'defg', 'hikv', 'uz12'])
  });

  test('encode testMessage', () => {

    expect(encode("Lorem ipsum do", 1)).toEqual(['lmMp', 'sfn ', 'jqtv', 'n ep'])
  });

  test('decode testMessage', () => {

    expect(decode(['lmMp', 'sfn ', 'jqtv', 'n ep'])).toBe("Lorem ipsum do")
  });
})
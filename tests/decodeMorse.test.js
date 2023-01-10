import { decodeMorse } from "../decodeMorse";

describe('Decode the morse code kata', () => {

  test('decoding HEY JUDE', () => {

    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
  })
  test('decoding HEY', () => {

    expect(decodeMorse('   .... . -.--   ')).toBe('HEY');
  })
})
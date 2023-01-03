const { rgb } = require('../rgbToHexConversion');

describe('RGB to HEX Conversion codewars kata', () => {

  test('testing with rgb(0, 0, 0)', () => {

    expect(rgb(0, 0, 0)).toBe('000000');
  })

  test('testing with rgb(0, 0, -20)', () => {

    expect(rgb(0, 0, -20)).toBe('000000');
  })

  test('testing with rgb(300, 255, 255)', () => {

    expect(rgb(300, 255, 255)).toBe('FFFFFF');
  })

  test('testing with rgb(255, 255, 255)', () => {

    expect(rgb(255, 255, 255)).toBe('FFFFFF');
  })

  test('testing with rgb(255, 255, 300)', () => {

    expect(rgb(255, 255, 300)).toBe('FFFFFF');
  })
  
  test('testing with rgb(148, 0, 211)', () => {

    expect(rgb(148, 0, 211)).toBe('9400D3');
  })

  test('testing with rgb(173, 255, 47)', () => {

    expect(rgb(173, 255, 47)).toBe('ADFF2F');
  })
})
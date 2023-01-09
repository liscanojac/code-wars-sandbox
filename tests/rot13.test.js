import { rot13 } from "../rot13";

describe('Rot13 kata', () => {

  test('should work for EBG13 rknzcyr.', () => {

    expect(rot13('EBG13 rknzcyr.')).toBe('ROT13 example.')
  })

  test('should work for This is my first ROT13 excercise!', () => {

    expect(rot13('This is my first ROT13 excercise!')).toBe('Guvf vf zl svefg EBG13 rkprepvfr!');
  })
})
import { countBits } from '../bitCounting'

describe('Bit Counting kata', () => {

  test('bits for 0', () => {

    expect(countBits(0)).toBe(0);
  })

  test('bits for 4', () => {

    expect(countBits(4)).toBe(1);
  })

  test('bits for 7', () => {

    expect(countBits(7)).toBe(3);
  })
})
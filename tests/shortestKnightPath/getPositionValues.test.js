import { getPositionValue } from "../../katas/shortestKinghtPath/getPositionValue";

describe('getting array postion values of chess board positions', () => {

  test('a8 should return 0', () => {

    expect(getPositionValue('a8')).toBe(0);
  })

  test('h1 should return 63', () => {

    expect(getPositionValue('h1')).toBe(63);
  })

  test('h8 should return 7', () => {

    expect(getPositionValue('h8')).toBe(7);
  })

  test('a7 should return 8', () => {

    expect(getPositionValue('a7')).toBe(8);
  })
})
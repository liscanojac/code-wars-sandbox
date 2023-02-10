import { landPerimeter } from "../katas/landPerimeter";

describe('Land perimeter kata', () => {

  test('it has a perimeter of 24', () => {

    expect(landPerimeter(['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'])).toBe('Total land perimeter: 24');
  })

  test('it has a perimeter of 18', () => {

    expect(landPerimeter(['XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'])).toBe('Total land perimeter: 18');
  })

  test('it has a perimeter of 60', () => {

    expect(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"])).toBe('Total land perimeter: 60');
  })

  test('it has a perimeter of 52', () => {

    expect(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"])).toBe('Total land perimeter: 52');
  })

  test('it has a perimeter of 40', () => {

    expect(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"])).toBe('Total land perimeter: 40');
  })

  test('it has a perimeter of 54', () => {

    expect(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"])).toBe('Total land perimeter: 54');
  })

  test('it has a perimeter of 40', () => {

    expect(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"])).toBe('Total land perimeter: 40');
  })
})
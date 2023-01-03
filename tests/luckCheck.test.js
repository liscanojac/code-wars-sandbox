const { luckCheck } = require('../luckCheck');

describe('luckCheck codewars kata', () => {

  test('with 683179 returns true', () => {

    expect(luckCheck('683179')).toBe(true);
  })

  test('with 683000 returns false', () => {

    expect(luckCheck('683000')).toBe(false);
  })
  
  test('with 6F43E8 throws an error', () => {

    expect(() => luckCheck('6F43E8')).toThrow();
  })
  test('with 123E183 throws an error', () => {

    expect(() => luckCheck('123E183')).toThrow();
  })
  test('with 124-21 throws an error', () => {

    expect(() => luckCheck('124-21')).toThrow();
  })
})
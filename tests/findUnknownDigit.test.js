const { solveExpression } = require('../findUnknownDigit');

describe('Find the unknown digit kata', () => {

  test('testing 1+1=?', () => {

    expect(solveExpression('1+1=?')).toBe(2);
  })

  test('testing 123*45?=5?088', () => {

    expect(solveExpression('123*45?=5?088')).toBe(6);
  })

  test('testing -5?*-1=5?', () => {

    expect(solveExpression('-5?*-1=5?')).toBe(0);
  })

  test('testing 19--45=5?', () => {

    expect(solveExpression('19--45=5?')).toBe(-1);
  })

  test('testing ??*??=302?', () => {

    expect(solveExpression('??*??=302?')).toBe(5);
  })

  test('testing ?*11=??', () => {

    expect(solveExpression('?*11=??')).toBe(2);
  })

  test('testing ??+??=??', () => {

    expect(solveExpression('??+??=??')).toBe(-1);
  })
})
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
  
  test('testing 1+1=?', () => {

    expect(solveExpression('1+1=?')).toBe(2);
  })

  test('testing 123*45?=5?088', () => {

    expect(solveExpression('123*45?=5?088')).toBe(6);
  })

  test('testing 123*45?=5?088', () => {

    expect(solveExpression('123*45?=5?088')).toBe(6);
  })
  
  test('testing -5?*-1=5?', () => {

    expect(solveExpression('-5?*-1=5?')).toBe(0);
  })

  test('testing ??*??=302?', () => {

    expect(solveExpression('??*??=302?')).toBe(5);
  })

  test('testing ??*??=302?', () => {

    expect(solveExpression('??*??=302?')).toBe(5);
  })

  test('testing ?*11=??', () => {

    expect(solveExpression('?*11=??')).toBe(2);
  })

  test('testing ?*11=??', () => {

    expect(solveExpression('?*11=??')).toBe(2);
  })

  test('testing 123?45+?=123?45', () => {

    expect(solveExpression('123?45+?=123?45')).toBe(0);
  })

  test('testing ?8?170-1?6256=7?2?14', () => {

    expect(solveExpression('?8?170-1?6256=7?2?14')).toBe(9);
  })

  test('testing ?38???+595???=833444', () => {

    expect(solveExpression('?38???+595???=833444')).toBe(2);
  })

  test('testing 123?45-?=123?45', () => {

    expect(solveExpression('123?45-?=123?45')).toBe(0);
  })

  test('testing -7715?5--484?00=-28?9?5', () => {

    expect(solveExpression('-7715?5--484?00=-28?9?5')).toBe(6);
  })

  test('testing 50685?--1?5630=652?8?', () => {

    expect(solveExpression('50685?--1?5630=652?8?')).toBe(4);
  })

  test('testing 123?45*?=?', () => {

    expect(solveExpression('123?45*?=?')).toBe(0);
  })
  
  test('testing ?*123?45=?', () => {

    expect(solveExpression('?*123?45=?')).toBe(0);
  })

  test('testing ??605*-63=-73???5', () => {

    expect(solveExpression('??605*-63=-73???5')).toBe(1);
  })

  test('testing -?56373--9216=-?47157', () => {

    expect(solveExpression('-?56373--9216=-?47157')).toBe(8);
  })
})
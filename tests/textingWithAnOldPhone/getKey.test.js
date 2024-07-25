import { getKeyData } from "../../katas/textingWithAnOldPhone";

describe('Testing the key mapping', () => {

  test('a', () => {

    expect(getKeyData('a').key).toBe(2);
  });

  test('b', () => {

    expect(getKeyData('b').key).toBe(2);
  });

  test('c', () => {

    expect(getKeyData('c').key).toBe(2);
  });
  test('d', () => {

    expect(getKeyData('d').key).toBe(3);
  });
  test('e', () => {

    expect(getKeyData('e').key).toBe(3);
  });
  test('f', () => {

    expect(getKeyData('f').key).toBe(3);
  });
  test('g', () => {

    expect(getKeyData('g').key).toBe(4);
  });
  test('h', () => {

    expect(getKeyData('h').key).toBe(4);
  });
  test('i', () => {

    expect(getKeyData('i').key).toBe(4);
  });
  test('j', () => {

    expect(getKeyData('j').key).toBe(5);
  });
  test('k', () => {

    expect(getKeyData('k').key).toBe(5);
  });
  test('l', () => {

    expect(getKeyData('l').key).toBe(5);
  });
  test('m', () => {

    expect(getKeyData('m').key).toBe(6);
  });
  test('n', () => {

    expect(getKeyData('n').key).toBe(6);
  });
  test('o', () => {

    expect(getKeyData('o').key).toBe(6);
  });
  test('p', () => {

    expect(getKeyData('p').key).toBe(7);
  });
  test('q', () => {

    expect(getKeyData('q').key).toBe(7);
  });
  test('r', () => {

    expect(getKeyData('r').key).toBe(7);
  });
  test('s', () => {

    expect(getKeyData('s').key).toBe(7);
  });
  test('t', () => {

    expect(getKeyData('t').key).toBe(8);
  });
  test('u', () => {

    expect(getKeyData('u').key).toBe(8);
  });
  test('v', () => {

    expect(getKeyData('v').key).toBe(8);
  });
  test('w', () => {

    expect(getKeyData('w').key).toBe(9);
  });
  test('x', () => {

    expect(getKeyData('x').key).toBe(9);
  });
  test('y', () => {

    expect(getKeyData('y').key).toBe(9);
  });
  test('z', () => {

    expect(getKeyData('z').key).toBe(9);
  });
});
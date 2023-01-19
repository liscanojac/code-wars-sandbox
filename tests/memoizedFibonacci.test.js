import { fibonacci } from "../memoizedFibonacci";

describe('Memoized Fibonacci kata', () => {

  test('Fibonacci of 0', () => {

    expect(fibonacci(0)).toBe(0);
  })

  test('Fibonacci of 1', () => {

    expect(fibonacci(1)).toBe(1);
  })

  test('Fibonacci of 5', () => {

    expect(fibonacci(5)).toBe(5);
  })

  test('Fibonacci of 10', () => {

    expect(fibonacci(10)).toBe(55);
  })

  test('Fibonacci of 15', () => {

    expect(fibonacci(15)).toBe(610);
  })

  test('Fibonacci of 20', () => {

    expect(fibonacci(20)).toBe(6765);
  })

  test('Fibonacci of 50', () => {

    expect(fibonacci(50)).toBe(12586269025);
  })

  test('Fibonacci of 60', () => {

    expect(fibonacci(60)).toBe(1548008755920);
  })

  test('Fibonacci of 70', () => {

    expect(fibonacci(70)).toBe(190392490709135);
  })
})
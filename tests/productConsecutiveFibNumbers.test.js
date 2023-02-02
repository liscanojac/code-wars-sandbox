import { productFib } from "../katas/productConsecutiveFibNumbers";

describe('Product of consecutive fibonacci numbers kata', () => {

  test('should return true', () => {

    expect(productFib(4895)).toEqual([55, 89, true]);
  })

  test('should return false', () => {

    expect(productFib(5895)).toEqual([89, 144, false]);
  })

  test('should return true', () => {

    expect(productFib(74049690)).toEqual([6765, 10946, true]);
  })
  test('should return false', () => {

    expect(productFib(84049690)).toEqual([10946, 17711, false]);
  })
  test('should return true', () => {

    expect(productFib(193864606)).toEqual([10946, 17711, true]);
  })
  test('should return false', () => {

    expect(productFib(447577)).toEqual([610, 987, false]);
  })
  test('should return true', () => {

    expect(productFib(602070)).toEqual([610, 987, true]);
  })
})
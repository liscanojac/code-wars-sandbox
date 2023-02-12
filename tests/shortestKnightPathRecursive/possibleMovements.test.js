import { determinePossibleMovements } from "../../katas/shortestKnightPathRecursive";

describe('Chess possible movements for knight', () => {

  test('possible movements in f5', () => {

    expect(determinePossibleMovements('f5').sort()).toEqual(["d4","e7", "h4", "g3", "h6", "g7", "d6", "e3",].sort())
  })

  test('possible movements in d4', () => {

    expect(determinePossibleMovements('d4').sort()).toEqual(["b5","b3", "c2", "c6", "e2", "e6", "f3", "f5",].sort())
  })
  test('possible movements in b2', () => {

    expect(determinePossibleMovements('b2').sort()).toEqual(["a4", "c4", "d3", "d1"].sort())
  })
})
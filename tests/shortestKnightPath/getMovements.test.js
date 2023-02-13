import { getMovements, getStartMovement } from "../../katas/shortestKinghtPath/getMovements"
describe('Chess possible movements for knight', () => {

  test('possible movements in f5', () => {

    expect(getMovements(getStartMovement('f5')).map(movement => movement.position).sort()).toEqual(["d4","e7", "h4", "g3", "h6", "g7", "d6", "e3",].sort())
  })

  test('possible movements in d4', () => {

    expect(getMovements(getStartMovement('d4')).map(movement => movement.position).sort()).toEqual(["b5","b3", "c2", "c6", "e2", "e6", "f3", "f5",].sort())
  })
  test('possible movements in b2', () => {

    expect(getMovements(getStartMovement('b2')).map(movement => movement.position).sort()).toEqual(["a4", "c4", "d3", "d1"].sort())
  })
})
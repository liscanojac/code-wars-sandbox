import { movementValidator } from "../../katas/shortestKinghtPath/movementValidator";

describe('Chess position validator', () => {

  const movements = {
    directions: {
      lowerRightSide: 'lowerRightSide',
      lowerLeftSide: 'lowerLeftSide',
      upperLeftSide: 'upperLefttSide',
      upperRightSide: 'upperRighttSide'
    },
    depth: {
      deep: 'deep',
      wide: 'wide'
    }
  };

  test('a8 should return true for lowerRightSide.deep', () => {

    expect(movementValidator({ direction: movements.directions.lowerRightSide, depth: movements.depth.deep })('a8')).toBe(true);
  })
  test('h1 should return false for lowerRightSide.deep', () => {

    expect(movementValidator({ direction: movements.directions.lowerRightSide, depth: movements.depth.deep })('h1')).toBe(false);
  })
  test('g2 should return false for lowerRightSide.deep', () => {

    expect(movementValidator({ direction: movements.directions.lowerRightSide, depth: movements.depth.deep })('g2')).toBe(false);
  })
  test('b2 should return false for lowerRightSide.deep', () => {

    expect(movementValidator({ direction: movements.directions.lowerRightSide, depth: movements.depth.deep })('b2')).toBe(false);
  })
  test('c5 should return true for lowerRightSide.deep', () => {

    expect(movementValidator({ direction: movements.directions.lowerRightSide, depth: movements.depth.deep })('c5')).toBe(true);
  })
})
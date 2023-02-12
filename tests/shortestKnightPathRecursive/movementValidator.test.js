import { isMovementValid } from "../../katas/shortestKnightPathRecursive/movementValidator";

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

    expect(isMovementValid('a8', { direction: movements.directions.lowerRightSide, depth: movements.depth.deep })).toBe(true);
  })
  test('h1 should return false for lowerRightSide.deep', () => {

    expect(isMovementValid('h1', { direction: movements.directions.lowerRightSide, depth: movements.depth.deep })).toBe(false);
  })
  test('g2 should return false for lowerRightSide.deep', () => {

    expect(isMovementValid('g2', { direction: movements.directions.lowerRightSide, depth: movements.depth.deep })).toBe(false);
  })
  test('b2 should return false for lowerRightSide.deep', () => {

    expect(isMovementValid('b2', { direction: movements.directions.lowerRightSide, depth: movements.depth.deep })).toBe(false);
  })
  test('c5 should return true for lowerRightSide.deep', () => {

    expect(isMovementValid('c5', { direction: movements.directions.lowerRightSide, depth: movements.depth.deep })).toBe(true);
  })
})
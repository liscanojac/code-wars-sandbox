import { elevatorDistance } from "../katas/elevatorDistance";

describe('Elevator Diatnce kata', () => {

  test('First test', () => {

    expect(elevatorDistance([5, 2, 8])).toBe(9);
  })
  
  test('Second test', () => {

    expect(elevatorDistance([1, 2, 3])).toBe(2);
  })

  test('Third test', () => {

    expect(elevatorDistance([7, 1, 7, 1])).toBe(18);
  })

  test('Fourth test', () => {

    expect(elevatorDistance([3, 3])).toBe(0);
  })
})
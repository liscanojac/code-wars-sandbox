import { knight } from "../../katas/shortestKinghtPath/shortestKnightPathValues";

describe('Counting knight moves looped', () => {

  test("Needs 3 moves from d4 to c4", () => {

    expect(knight('d4', 'c4')).toBe(3);
  })

  test("Needs 4 moves from d4 to f2", () => {

    expect(knight('d4', 'f2')).toBe(4);
  })

  test("Needs 4 moves from d4 to h8", () => {

    expect(knight('d4', 'h8')).toBe(4);
  })

  test("Needs 4 moves from b2 to a1", () => {

    expect(knight('b2', 'a1')).toBe(4);
  })

  test("Needs 5 moves from b2 to h7", () => {

    expect(knight('b2', 'h7')).toBe(5);
  })

  test("Needs 1 moves from a1 to c2", () => {

    expect(knight('a1', 'c2')).toBe(1);
  })

  test("Needs 1 moves from a1 to b3", () => {

    expect(knight('a1', 'b3')).toBe(1);
  })
  
  test("Needs 5 moves from a1 to a8", () => {

    expect(knight('a1', 'a8')).toBe(5);
  })

  test("Needs 4 moves from a1 to a7", () => {

    expect(knight('a1', 'a7')).toBe(4);
  })

  test("Needs 6 moves from a1 to h8", () => {

    expect(knight('a1', 'h8')).toBe(6);
  })

  test("Needs 4 moves from a8 to g2", () => {

    expect(knight('a8', 'g2')).toBe(4);
  })
})
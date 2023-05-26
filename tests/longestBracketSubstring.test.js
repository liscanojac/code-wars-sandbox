import { longestBracket } from "../katas/longestBracketSubstring";

describe('The longest bracket substring in the string kata', () => {

  // basic tests
  test('it returns 2', () => {

    expect(longestBracket("()")).toBe(2);
  })
  test('it returns 2', () => {

    expect(longestBracket("()(")).toBe(2);
  })
  test('it returns 4', () => {

    expect(longestBracket("()()")).toBe(4);
  })
  test('it returns 4', () => {

    expect(longestBracket("()()(")).toBe(4);
  })
  test('it returns 6', () => {

    expect(longestBracket("(()())")).toBe(6);
  })
  test('it returns 6', () => {

    expect(longestBracket("(()(())")).toBe(6);
  })
  test('it returns 4', () => {

    expect(longestBracket("())(()))")).toBe(4);
  })
  test('it returns 0', () => {

    expect(longestBracket("))((")).toBe(0);
  })
  test('it returns 0', () => {

    expect(longestBracket("")).toBe(0);
  })

  // longer tests
  test('it returns 14', () => {

    expect(longestBracket(")(((())))))(((()()()())())((")).toBe(14);
  })
  test('it returns 24', () => {

    expect(longestBracket(")(((()()(()((((()))))))))((()(((((((()(")).toBe(24);
  })
  test('it returns 22', () => {

    expect(longestBracket("))())()())())((())(((()()))((()((())))())((")).toBe(22);
  })
  test('it returns 8', () => {

    expect(longestBracket("((()())(((()(()(((((((())))(((()")).toBe(8);
  })
  test('it returns 10', () => {

    expect(longestBracket("))(()()((((()()((()))")).toBe(10);
  })
  test('it returns 30', () => {

    expect(longestBracket("())()()(())((())(())()(()()))()())(()(((()))))")).toBe(30);
  })
  test('it returns 8', () => {

    expect(longestBracket(")(()()()()")).toBe(8);
  })
  test('it returns 20', () => {

    expect(longestBracket(")()(())((())(()))(())))())())))")).toBe(20);
  })
  test('it returns 16', () => {

    expect(longestBracket("(()()())())()(((()()))()()))()(((())((())(((())()(")).toBe(16);
  })
  test('it returns 44', () => {

    expect(longestBracket("()(((()))(())()())((()(()())()))(()()(()))())())()")).toBe(44);
  })
  test('it returns 6', () => {

    expect(longestBracket("())))()()()((()(()((()((()(((()())((()(")).toBe(6);
  })
  test('it returns 4', () => {

    expect(longestBracket("))()()(((()")).toBe(4);
  })
  test('it returns 22', () => {

    expect(longestBracket(")))()()(()((()(()()()())(()(())))")).toBe(22);
  })
  test('it returns 26', () => {

    expect(longestBracket("))))()))(((())(((((()))()()(())))())(()(())()((")).toBe(26);
  })
  test('it returns 16', () => {

    expect(longestBracket("))))()()()(()()(()(()())())((()(()(()())((()")).toBe(16);
  })
})
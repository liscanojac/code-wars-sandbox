import { duplicatesEverywhere } from "../katas/duplicatesEverywhere";

describe('Duplicates Everywhere kata', () => {

  test('First test', () => {

    const input = {
      "1": ["C", "F", "G"],
      "2": ["A", "B", "C"],
      "3": ["A", "B", "D"],
    };

    const output = {
      "1": ["F", "G"],
      "2": ["C"],
      "3": ["A", "B", "D"],
    };
    
    expect(duplicatesEverywhere(input)).toEqual(output);
  });

  test('Second test', () => {

    const input = {
      "1": ["A"],
      "2": ["A"],
      "3": ["A"],
    }

    const output = {
      "1": [],
      "2": [],
      "3": ["A"],
    };

    expect(duplicatesEverywhere(input)).toEqual(output);
  });

  test('Third test', () => {

    const input = {
      "432": ["A", "A", "B", "D"],
      "53": ["L", "G", "B", "C"],
      "236": ["L", "A", "X", "G", "H", "X"],
      "11": ["P", "R", "S", "D"],
    }

    const output = {
      "11": ["P", "R", "S"],
      "53": ["C"],
      "236": ["L", "X", "G", "H"],
      "432": ["A", "B", "D"],
    };

    expect(duplicatesEverywhere(input)).toEqual(output);
  });
})
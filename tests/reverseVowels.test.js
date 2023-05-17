import { reverseVowels } from "../katas/reverseVowels";

describe('Reverse Vowels In A String kata', () => {

  test('reversing Hello', () => {

    expect(reverseVowels('Hello!')).toBe('Holle!');
  });

  test('reversing Tomatoes', () => {

    expect(reverseVowels('Tomatoes')).toBe('Temotaos');
  });

  test('reversing Reverse Vowels In A String', () => {

    expect(reverseVowels('Reverse Vowels In A String')).toBe('RivArsI Vewols en e Streng');
  });
})
// https://www.codewars.com/kata/584c3e45710dca21be000088

interface Helper {
  longestSubstr: number;
  closedBracketsInRow: number;
  currentSubstr: number;
  balance?: number;
}

export function longestBracket(str: string): number {

  if (!str.length) return 0;

  const bracket = {
    opening: '(',
    closing: ')'
  };

  const helpers: Helper = {
    longestSubstr: 0,
    closedBracketsInRow: 0,
    currentSubstr: 0
  }

  for (let i = 0; i < str.length; i++) {

    const currentChar = str[i];

    if (helpers.balance === undefined) {

      if (currentChar === bracket.opening) {
        helpers.balance = 1;
        helpers.currentSubstr++;
      }
    } else {
      
      if (currentChar === bracket.opening) helpers.balance++;
      if (currentChar === bracket.closing) helpers.balance--;

      if (helpers.balance >= 0) helpers.currentSubstr++;
      if (helpers.balance <= 0) {
        helpers.longestSubstr = helpers.currentSubstr > helpers.longestSubstr ? helpers.currentSubstr : helpers.longestSubstr;
      }
      if (helpers.balance < 0) {
        helpers.balance = undefined;
        helpers.currentSubstr = 0;
      }
    }
  }
  if (helpers.balance === 0 && helpers.currentSubstr > helpers.longestSubstr) helpers.longestSubstr = helpers.currentSubstr;

  return helpers.longestSubstr;
}
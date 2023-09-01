// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function splitString(str: string): Array<string> {

  const stringSplitted: Array<string> = [];
  let pairedSubstring = '';

  for (let i = 0; i < str.length; i++) {

    pairedSubstring += str[i];

    if (pairedSubstring.length === 2) {
      stringSplitted.push(pairedSubstring);
      pairedSubstring = '';
    }
  }
  if (pairedSubstring) stringSplitted.push(`${pairedSubstring}_`);

  return stringSplitted;
}
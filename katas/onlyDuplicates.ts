// https://www.codewars.com/kata/5a1dc4baffe75f270200006b
interface Helper {
  [i: string]: {
    n: number,
    firstPosition: number,
  }
}

interface DuplicatesHelper {
  [i: string]: boolean;
};

export function onlyDuplicates(str: string): string {

  const counter: Helper = {};
  let duplicatesArr : Array<string> = Array(str.length).fill('');

  for (let i = 0; i < str.length; i++) {

    if (!counter[str[i]]) {

      counter[str[i]] = {
        n: 0,
        firstPosition: i
      };
      continue;
    }

    counter[str[i]].n++;

    if (counter[str[i]].n === 1) duplicatesArr[counter[str[i]].firstPosition] = str[i];

    duplicatesArr[i] = str[i];
  }

  
  return duplicatesArr.filter(str => str).join('');
}

export function onlyDuplicates2(str: string): string {
  
  const duplicateHelper: DuplicatesHelper = {};
  function isDuplicate(char: string): boolean {

    if (duplicateHelper[char] === undefined) duplicateHelper[char] = str.split(char).length > 2;
    
    return duplicateHelper[char];
  }
  let onlyDuplicatesStr: string = '';

  for (let i = 0; i < str.length; i++) {

    if (isDuplicate(str[i])) onlyDuplicatesStr += str[i];
  }
  return onlyDuplicatesStr;
}

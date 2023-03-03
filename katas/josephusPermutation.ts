// https://www.codewars.com/kata/5550d638a99ddb113e0000a2

export function josephus(items: Array<number | undefined>, k: number): Array<number> {

  let i = 0;
  let j = 1;
  const permutation: Array<number> = [];
  if (!items.length || !k) return permutation;
  
  function indexHelper() {

    if (i === items.length - 1) {
      i = 0;
    } else {
      i++;
    }
  };

  while (permutation.length < items.length) {

    if (items[i] !== undefined) {
      if (j === k) {
        j = 1;
        permutation.push(items[i]!);
        items[i] = undefined;
        indexHelper();
        continue;
      }
      j++;
    }
    indexHelper();
  }

  return permutation;
}
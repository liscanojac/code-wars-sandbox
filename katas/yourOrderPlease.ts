// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function sortString(str: string): string {

  const strArray = str.split(' ').map(word => {
    return {
      word,
      order: findNumber(word)
    }
  });

  strArray.sort((a, b) => a.order - b.order);

  return strArray.map(element => element.word).join(' ');
}

function findNumber(str: string): number {
  return Number(str.replace(/\D+/g, ''))
}

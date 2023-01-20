// https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa

function isMerge(str, part1, part2) {

  if (!orderChecker(str, part1) || !orderChecker(str, part2)) return false;
  const strArr = str.split('');
  const mergedArr = part1.split('').concat(part2.split(''))

  strArr.sort();
  mergedArr.sort();

  return strArr.toString() === mergedArr.toString();
}

function orderChecker(str, part) {

  let prevIndex = -1;

  for (let i = 0; i < part.length; i++) {

    let currentIndex = str.indexOf(part[i], prevIndex < 0 ? 0 : prevIndex);

    if (currentIndex < prevIndex) return false;
    prevIndex = currentIndex;
  }
  return true;
}

module.exports = {
  isMerge
}
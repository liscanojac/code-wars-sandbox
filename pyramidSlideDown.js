// https://www.codewars.com/kata/551f23362ff852e2ab000037

function longestSlideDown(pyramid) {

  function combineBaseLines() {

    const baseLine = pyramid.pop();
    const aboveLine = pyramid.pop();

    for (let i = 0; i < aboveLine.length; i++) {

      aboveLine[i] = Math.max(aboveLine[i] + baseLine[i], aboveLine[i] + baseLine[i + 1]);
    }
    pyramid.push(aboveLine);
  }

  while(pyramid.length > 1) combineBaseLines();

  return pyramid[0][0];
}

module.exports = {
  longestSlideDown
}
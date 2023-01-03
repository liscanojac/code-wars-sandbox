// https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(text) {

  text = text.toLowerCase().replace(/[^a-zA-Z' ]/g,"").trim();

  if (!text.length || !text.replace(/[']/g,"").trim().length) return [];

  const wordCounter = {};

  while (text.length > 0) {

    let nextWhitespaceIndex = text.indexOf(' ');

    let currentWord = nextWhitespaceIndex > 0 ? text.slice(0, nextWhitespaceIndex) : text;

    if(wordCounter[currentWord]) {
      wordCounter[currentWord]++;
    } else {
      wordCounter[currentWord] = 1;
    }

    text = nextWhitespaceIndex > 0 ? text.substring(nextWhitespaceIndex).trim() : "";
  }

  const wordCounterArr = Object.entries(wordCounter);

  wordCounterArr.sort((a, b) => b[1] - a[1]);

  if(wordCounterArr.length < 3) {

    const resultArr = [];

    for (let i = 0; i < wordCounterArr.length; i++) {

      resultArr.push(wordCounterArr[i][0]);
    }
    return resultArr;
  }

  return [wordCounterArr[0][0], wordCounterArr[1][0], wordCounterArr[2][0]];
}

module.exports = {
  topThreeWords
}
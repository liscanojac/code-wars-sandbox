// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {

  let repeatedCharacters = 0;
  text = text.toLowerCase();

  const uniqueCharacters = [...new Set(text.split(''))];

  for (let i = 0; i < uniqueCharacters.length; i++) {

    let shortenedText = text.split(uniqueCharacters[i]).join('');

    if (text.length - shortenedText.length > 1) repeatedCharacters++;
  }
  return repeatedCharacters;
}

module.exports = {
  duplicateCount
}
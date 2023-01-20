// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(sentence) {

  const sentenceLowered = sentence.toLowerCase()

  let resultArr = [];

  for (let i = 0; i < sentenceLowered.length; i++) {

    let code = sentenceLowered.charCodeAt(i) - 96;

    if(isAlphabetCharacter(code)) {
      resultArr.push(code);
    }
  }
  return resultArr.join(' ');
}

function isAlphabetCharacter(code) {
  return code > 0 && code < 27;
}

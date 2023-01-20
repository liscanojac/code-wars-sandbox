
function solution(input, markers) {

  const inputArr = input.split('\n');

  for (let i = 0; i < inputArr.length; i++) {

    let currentLine = inputArr[i];

    let substringIndex = currentLine.length;
    for (let j = 0; j < markers.length; j++) {

      let currentCharacter = markers[j];

      let currentIndex = currentLine.indexOf(currentCharacter);

      if (currentIndex > 0 && currentIndex < substringIndex) {
        substringIndex = currentIndex;
      }
    }
    inputArr[i] = currentLine.substring(0, substringIndex).trimEnd();
  }

  return inputArr.join('\n');
}
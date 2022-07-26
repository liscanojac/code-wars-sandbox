// https://www.codewars.com/kata/62a933d6d6deb7001093de16/train/javascript

function getTheVowel(word) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let consecutiveVowelCount = 0;

  for (let i = 0; i < word.length; i++) {

    if (word[i] === vowels[consecutiveVowelCount % vowels.length]) {

      consecutiveVowelCount++
    }
  }
  return consecutiveVowelCount;
}

console.log(getTheVowel("agrtertyfikfmroyrntbvsukldkfa"))
console.log(getTheVowel("erfaiekjudhyfimngukduo"))
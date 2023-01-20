// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {

  const trimmedStr = str.trim();

  if (!trimmedStr) {
    return false;
  }

  const arr = trimmedStr.split(' ');

  let resultStr = '#';

  for (let i = 0; i < arr.length; i++) {

    if (arr[i]) {
      resultStr += capitaliseFirstLetter(arr[i]);
    }
  }
  if (resultStr.length > 140) return false;

  return resultStr;
}

function capitaliseFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
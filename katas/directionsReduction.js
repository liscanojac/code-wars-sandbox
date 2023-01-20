// https://www.codewars.com/kata/550f22f4d758534c1100025a

function directionReduction(arr) {

  let stringArr = arr.join(' ');

  function recursiveSearch(str) {

    // the stopping point
    if (!str.length) {
      return str;
    }
    if (!hasDirectionsErasable(str)) {
      return str;
    }

    const directions = ["NORTH SOUTH", "WEST EAST", "SOUTH NORTH", "EAST WEST"];
    
    for (let i = 0; i < directions.length; i++) {

      str = str.replace(directions[i], "");
    }
    // clearing extra whitespaces
    str = str.replace(/\s+/g, ' ').trim();
    return recursiveSearch(str);
  }
  let resultString = recursiveSearch(stringArr);
  if(!resultString.length) {
    return [];
  }
  if(resultString.length <= 5) {
    return [resultString];
  }
  return resultString.split(' ');
}

function hasDirectionsErasable(str) {

  const directions = ["NORTH SOUTH", "WEST EAST", "SOUTH NORTH", "EAST WEST"];

  for (let i = 0; i < directions.length; i++) {
    if (str.indexOf(directions[i]) >= 0) {
      return true;
    }
  }
  return false;
}

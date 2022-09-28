// https://www.codewars.com/kata/5263c6999e0f40dee200059d

function getPINs(observed) {

  const adyacentNumbers = {
    0: ['8', '0'],
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5', '7'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5', '6', '9'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9']
  }

  let observedWithAdyacentsArr = [];

  for (let i = 0; i < observed.length; i++) {

    observedWithAdyacentsArr.push(adyacentNumbers[observed[i]]);
  }

  if(observedWithAdyacentsArr.length === 1) {
    return observedWithAdyacentsArr[0];
  }

  return allPossibleCases(observedWithAdyacentsArr)
}

function combinations(array) {
  if(!array.length) {
    return [];
  }

  // wrap non-array values
  // e.g. ['x',['y','z']] becomes [['x'],['y','z']]
  array = array.map((item) => item instanceof Array
                              ? item
                              : [item]);

  // internal recursive function
  function combinator(arr) {

    if(arr.length === 1) {
      return arr[0];
      // stoppage point for the recursion
    }

    const prefixes = arr[0];
    const combinations = combinator(arr.slice(1)); // recursion

    // produce a flat list of each of the current
    // set of values prepended to each combination
    // of the remaining sets.
    return prefixes.reduce(function (memo, prefix) {
      return memo.concat(combinations.map(function (combination) {
        return [prefix].concat(combination);
      }));
    }, []);
  }

  return combinator(array);
}

function allPossibleCases(arr) {
  return combinations(arr).map((combination) => combination.join(''))
}

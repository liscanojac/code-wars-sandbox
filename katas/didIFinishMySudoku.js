// https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript

function doneOrNot(board) {

  const output = {
    success: "Finished!",
    failure: "Try again!"
  };

  const sections = new Array(9);

  for(let i = 0; i < board.length; i++) {

    if (!rowChecker(board[i])) return output.failure;
    const column = [];

    for (let j = 0; j < board.length; j++) {

      if(!columnChecker(column, board[j][i])) return output.failure;

      if (!sectionChecker(sections, {
        cell: board[j][i],
        placement: {
          column: i,
          row: j
        }
      })) return output.failure;
    }
  }

  if ([...new Set(sections)].length > 1) return output.failure;
  return output.success;
}

function rowChecker(row) {

  return row.length === [...new Set(row)].length;
}

function columnChecker(column, cell) {

  if (!column.includes(cell)) {
    column.push(cell);
    return true;
  }
  return false;
}

function sectionChecker(sections, { cell, placement }) {

  const sectionIndex = sectionFinder(placement);

  if (sections[sectionIndex]) {
    sections[sectionIndex] += cell;
  } else {
    sections[sectionIndex] = cell;
  }
  if (sections[sectionIndex] > 45) return false;

  return true;
}

function sectionFinder({ column, row }) {
  
  const coordinates = {
    'top-top': 0,
    'middle-top': 1,
    'bottom-top': 2,
    'top-middle': 3,
    'middle-middle': 4,
    'bottom-middle': 5,
    'top-bottom': 6,
    'middle-bottom': 7,
    'bottom-bottom': 8
  };

  const placement = `${coordinateFinder(column)}-${coordinateFinder(row)}`

  return coordinates[placement];
}

function coordinateFinder(coordinate) {

  const placement = {
    top: 'top',
    middle: 'middle',
    bottom: 'bottom'
  };

  if (coordinate > 2 && coordinate < 6) return placement.middle;
  
  if (coordinate < 3) return placement.top;

  if (coordinate > 5) return placement.bottom;
}

module.exports = {
  doneOrNot
}
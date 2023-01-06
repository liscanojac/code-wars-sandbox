// https://www.codewars.com/kata/56882731514ec3ec3d000009

function whoIsWinner(piecesPositionList) {

  const boards = {
    columns: Array.from(Array(7), () => []),
    rows: Array.from(Array(6), () => [])
  }
  const players = {
    yellow: 'Yellow',
    red: 'Red'
  };
  const helpers = {
    columns: {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6
    },
    rows: {
      A: 5,
      B: 5,
      C: 5,
      D: 5,
      E: 5,
      F: 5,
      G: 5
    }
  }

  for (let i = 0; i < piecesPositionList.length; i++) {
    const piecePositionArr = piecesPositionList[i].split('_');
    const currentPosition = {
      column: piecePositionArr[0],
      player: piecePositionArr[1]
    };

    boards.columns[helpers.columns[currentPosition.column]].push(currentPosition.player);
    boards.rows[helpers.rows[currentPosition.column]][helpers.columns[currentPosition.column]] = currentPosition.player;
    helpers.rows[currentPosition.column]--;

    if (i > 3) {

      const currentValidation = validateBoard(boards);
      if(currentValidation !== 'Draw') return currentValidation;
    }
  }
  return boards;
  return 'Draw';
}

function validateBoard({ columns, rows }) {
  const players = {
    yellow: 'Yellow',
    red: 'Red'
  };

  function straightValidator(board) {

    for (let i = 0; i < board.length; i++) {

      const playersCount = {
        Yellow: 0,
        Red: 0
      };

      if (board[i].length >= 3) {
        let initialPlayer = board[i][0];
        playersCount[board[i][0]]++;
        for (let j = 1; j < board[i].length; j++) {
          
          if(!board[i][j]) continue;
          if (board[i][j] === initialPlayer) {
            playersCount[board[i][j]]++;
          } else {
            playersCount[initialPlayer] = 0;
            initialPlayer = board[i][j];
            playersCount[board[i][j]]++;
          }

          if(playersCount.Red >= 3 || playersCount.Yellow >= 3) {
            return board[i][j];
          }
        }
      }
    }
    return 'Draw'
  }

  function diagonalValidator(board) {

    function getCuadrants(column, row) {

      const cuadrants = [];

      switch(column) {
        case column < 2:
          if (board[column + 1].length >= row - 1 && 
              board[column + 2].length >= row - 2) 
                cuadrants.push('second');
          if (board[column + 1].length >= row + 1 && 
              board[column + 2].length >= row + 2) 
                cuadrants.push('third');
        case column > 4:
          if (board[column - 1].length >= row - 1 && 
              board[column - 2].length >= row - 2) 
                cuadrants.push('first');
          if (board[column - 1].length >= row + 1 && board[column - 2].length >= row + 2) cuadrants.push('fourth');
        default:
          if (board[column - 1].length >= row - 1 && 
              board[column - 2].length >= row - 2) 
                cuadrants.push('first');
          if (board[column + 1].length >= row - 1 && 
              board[column + 2].length >= row - 2) 
                cuadrants.push('second');
          if (board[column + 1].length >= row + 1 && 
              board[column + 2].length >= row + 2) 
                cuadrants.push('third');
          if (board[column - 1].length >= row + 1 && 
              board[column - 2].length >= row + 2) 
                cuadrants.push('fourth');
      }
      return cuadrants;
    }

    function cuadrantValidator(cuadrants, startingPoint) {

      const result = {
        winner: 'Draw',
        valid: false
      };

      const cuandrantMethods = {
        first: () => {
          if (board[startingPoint.column - 1][startingPoint.row - 1] === startingPoint.player &&
              board[startingPoint.column - 2][startingPoint.row - 2] === startingPoint.player) {
                result.winner = startingPoint.player;
                result.valid = true;
                return result;
            }
        },
        second: (cuadrant) => {},
        third: (cuadrant) => {},
        fourth: (cuadrant) => {}
      };

      for (let i = 0; i < cuadrants.length; i++) {
        cuandrantMethods[cuadrants[i]]();
      }
    }
    for (let i = 0; i < board.length; i++) {

      if (board[i].length < 3) continue;
      for (let j = 3; j < board[i].length; j++) {
        const currentCuadrants = getCuadrants(i, j);
        if (!currentCuadrants.length) continue;


      }

      
    }
  }

  const validateColumns = straightValidator(columns);
  if (validateColumns !== 'Draw') return validateColumns;
  const validateRows = straightValidator(rows);
  if(validateRows !== 'Draw') return validateRows;
  return 'Draw';
}

module.exports = {
  whoIsWinner
}
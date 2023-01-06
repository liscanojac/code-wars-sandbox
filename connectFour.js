// https://www.codewars.com/kata/56882731514ec3ec3d000009

function whoIsWinner(piecesPositionList) {

  const board = Array.from(Array(7), () => []);
  const columnHelper = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6
  };

  for (let i = 0; i < piecesPositionList.length; i++) {
    const piecePositionArr = piecesPositionList[i].split('_');
    const currentPosition = {
      column: piecePositionArr[0],
      player: piecePositionArr[1]
    };

    board[columnHelper[currentPosition.column]].push(currentPosition.player);

    if (i > 3) {
      
      const currentPlay = {
        column: columnHelper[currentPosition.column],
        row: board[columnHelper[currentPosition.column]].length - 1,
        player: currentPosition.player
      };

      if (isWinner(board, currentPlay)) return currentPlay.player;
    }
  }
  return 'Draw';
}

function isWinner(board, { column, row, player }) {

  const areFourConnected = {
    vertical: {
      overall: () => row >= 3 && 
                      board[column][row - 1] === player &&
                      board[column][row - 2] === player &&
                      board[column][row - 3] === player
    },
    horizontal: {
      right: () => {
        return column >= 3 &&
              board[column - 1][row] === player &&
              board[column - 2][row] === player &&
              board[column - 3][row] === player;
      },
      left: () => {
        return column <= 3 &&
              board[column + 1][row] === player &&
              board[column + 2][row] === player &&
              board[column + 3][row] === player;
      },
      middleLeft: () => {
        return column > 0 && column <= 4 &&
              board[column - 1][row] === player &&
              board[column + 1][row] === player &&
              board[column + 2][row] === player;
      },
      middleRight: () => {
        return column < 6 && column > 1 &&
              board[column + 1][row] === player &&
              board[column - 1][row] === player &&
              board[column - 2][row] === player;
      },
      overall: () => areFourConnected.horizontal.right() ||
                      areFourConnected.horizontal.left() ||
                      areFourConnected.horizontal.middleRight() ||
                      areFourConnected.horizontal.middleLeft()
    },
    diagonal: {
      upwardStart: () => {
        return column <= 3 && row <= 2 &&
              board[column + 1].length - 1 >= row + 1 &&
              board[column + 2].length - 1 >= row + 2 &&
              board[column + 3].length - 1 >= row + 3 &&
              board[column + 1][row + 1] === player &&
              board[column + 2][row + 2] === player &&
              board[column + 3][row + 3] === player;
      },
      upwardEnd: () => {
        return column > 2 &&
              board[column - 1].length - 1 >= row - 1 &&
              board[column - 2].length - 1 >= row - 2 &&
              board[column - 3].length - 1 >= row - 3 &&
              board[column - 1][row - 1] === player &&
              board[column - 2][row - 2] === player &&
              board[column - 3][row - 3] === player;
      },
      upwardMiddleLeft: () => {
        return column > 0 && column <= 4 && row > 0 && row <= 3 &&
              board[column - 1].length - 1 >= row - 1 &&
              board[column + 1].length - 1 >= row + 1 &&
              board[column + 2].length - 1 >= row + 2 &&
              board[column - 1][row - 1] === player &&
              board[column + 1][row + 1] === player &&
              board[column + 2][row + 2] === player;
      },
      upwardMiddleRight: () => {
        return column > 1 && column <= 5 && row > 1 && row <= 4 &&
              board[column - 1].length - 1 >= row - 1 &&
              board[column - 2].length - 1 >= row - 2 &&
              board[column + 1].length - 1 >= row + 1 &&
              board[column - 1][row - 1] === player &&
              board[column - 2][row - 2] === player &&
              board[column + 1][row + 1] === player;
      },
      downwardStart: () => {
        return row >= 2 && column <= 3 &&
              board[column + 1].length - 1 >= row - 1 &&
              board[column + 2].length - 1 >= row - 2 &&
              board[column + 3].length - 1 >= row - 3 &&
              board[column + 1][row - 1] === player &&
              board[column + 2][row - 2] === player &&
              board[column + 3][row - 3] === player;
      },
      downwardEnd: () => {
        return row <= 2 && column >= 3 &&
              board[column - 1].length - 1 >= row + 1 &&
              board[column - 2].length - 1 >= row + 2 &&
              board[column - 3].length - 1 >= row + 3 &&
              board[column - 1][row + 1] === player &&
              board[column - 2][row + 2] === player &&
              board[column - 3][row + 3] === player;
      },
      downwardMiddleLeft: () => {
        return column < 5 && column >= 1 && row > 0 && row <= 4 &&
              board[column - 1].length - 1 >= row + 1 &&
              board[column + 1].length - 1 >= row - 1 &&
              board[column + 2].length - 1 >= row - 2 &&
              board[column - 1][row + 1] === player &&
              board[column + 1][row - 1] === player &&
              board[column + 2][row - 2] === player;
      },
      downwardMiddleRight: () => {
        return column < 4 && column >= 2 && row > 1 && row <= 5 &&
              board[column - 1].length - 1 >= row + 1 &&
              board[column - 2].length - 1 >= row + 2 &&
              board[column + 1].length - 1 >= row - 1 &&
              board[column - 1][row + 1] === player &&
              board[column - 2][row + 2] === player &&
              board[column + 1][row - 1] === player;
      },
      overall: () => areFourConnected.diagonal.upwardStart() ||
                    areFourConnected.diagonal.upwardEnd() ||
                    areFourConnected.diagonal.upwardMiddleLeft() ||
                    areFourConnected.diagonal.upwardMiddleRight() ||
                    areFourConnected.diagonal.downwardStart() ||
                    areFourConnected.diagonal.downwardEnd() ||
                    areFourConnected.diagonal.downwardMiddleLeft() ||
                    areFourConnected.diagonal.downwardMiddleRight()
    }
  }

  return areFourConnected.vertical.overall() || areFourConnected.horizontal.overall() || areFourConnected.diagonal.overall();
}

module.exports = {
  whoIsWinner
}
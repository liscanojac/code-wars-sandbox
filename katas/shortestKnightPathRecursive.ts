// https://www.codewars.com/kata/549ee8b47111a81214000941
import { movements } from "./shortestKnightPathRecursive/possibleMovements";

export function knight(start: string, finish: string): number {

  const movementsDone: Array<string> = [];

  function moveKnight(start: string, moves: number = 1): number {

    const possibleMovements = determinePossibleMovements(start);

    if (possibleMovements.includes(finish)) return moves;
    possibleMovements.filter(movement => !movementsDone.includes(movement));
    movementsDone.concat(possibleMovements);

    moves = moves + 1;
    for (let i = 0; i < possibleMovements.length; i++) {

      return moveKnight(possibleMovements[i], moves);
    }
    return moves;
    // return possibleMovements.forEach((start: string) => moveKnight(start, moves))
  }

  return moveKnight(start);
}

function determinePossibleMovements(start: string): Array<string> {

  const possibleMovements: Array<string> = []

  for (const direction in movements) {

    for (const depth in movements[direction]) {

      movements[direction][depth](start, possibleMovements, { direction, depth });
    }
  }
  return possibleMovements;
}

export {
  determinePossibleMovements
}


// https://www.codewars.com/kata/549ee8b47111a81214000941
import { movements } from "./shortestKnightPathRecursive/possibleMovements";
import { PossibleMovement } from "../interfaces/shortestKnightPath";

function knight(start: string, finish: string): number {

  let movementsDone: Array<PossibleMovement> = determinePossibleMovements(start);
  let finishFound = movementsDone.find(movement => movement.position === finish);
  if (finishFound) return finishFound.move;
  let i = 0;
  
  while(movementsDone[i]) {
    const possibleMovements = determinePossibleMovements(movementsDone[i].position, movementsDone[i].move);
    finishFound = possibleMovements.find(movement => movement.position === finish);
    if (finishFound) return finishFound.move;
    movementsDone = movementsDone.concat(possibleMovements);
    i++;
  }
  return movementsDone[i].move;
}

function determinePossibleMovements(start: string, move: number = 0): Array<PossibleMovement> {

  const possibleMovements: Array<PossibleMovement> = []
  move++;
  for (const direction in movements) {

    for (const depth in movements[direction]) {

      movements[direction][depth](start, possibleMovements, move, { direction, depth });
    }
  }
  return possibleMovements;
}

export {
  determinePossibleMovements,
  knight
}


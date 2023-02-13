// https://www.codewars.com/kata/549ee8b47111a81214000941
import { getMovements, getStartMovement } from "./getMovements";

export function knight(start: string, finish: string): number {

  const startMovement = getStartMovement(start);
  let movementsDone = getMovements(startMovement);
  let finishFound = movementsDone.find(movement => movement.position === finish);
  if (finishFound) return finishFound.move;
  let i = 0;
  
  while(i < movementsDone.length) {
    const possibleMovements = getMovements(movementsDone[i]);
    finishFound = possibleMovements.find(movement => movement.position === finish);
    if (finishFound) return finishFound.move;
    movementsDone = movementsDone.concat(possibleMovements);
    i++;
  }
  return 0;
}

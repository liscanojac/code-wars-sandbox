// https://www.codewars.com/kata/549ee8b47111a81214000941

import { Movement } from "../../interfaces/shortestKnightPath";
import { getMovements, getStartMovement } from "./getMovements";

export function knight(start: string, finish: string): number {

  let movements = [getStartMovement(start)];

  function moveKnight(start: Movement | undefined, finish: string): number {

    if(!start) return 0;
    const movementsDone = getMovements(start)
    const finishFound = movementsDone.find(movement => movement.position === finish);

    if (finishFound) return finishFound.move;

    movements = movements.concat(movementsDone);
    return moveKnight(movements.shift(), finish);
  }
  return moveKnight(movements.shift()!, finish);
}
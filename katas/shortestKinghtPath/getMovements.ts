import { Movement } from "../../interfaces/shortestKnightPath";
import { movements } from "./movements";
import { movementValidator } from "./movementValidator";
import { movementGenerator } from "./movementGenerator";

function getMovements(movement: Movement): Array<Movement> {

  const possibleMovements: Array<Movement> = []
  for (const direction in movements) {

    for (const depth in movements[direction]) {

      const isMovementValid = movementValidator({ direction, depth });
      const getMovement = movementGenerator({ direction, depth });

      if (isMovementValid(movement.position)) possibleMovements.push(getMovement(movement))
    }
  }
  return possibleMovements;
}

function getStartMovement(start: string): Movement {

  return { position: start, move: 0 };
}

export {
  getMovements,
  getStartMovement
}
import { Coordinates, Movement } from "../../interfaces/shortestKnightPath";
import { movementValidator } from "./movementValidator";

export function movementGenerator(coordinates: Coordinates): (movement: Movement) => Movement {

  const isMovementValid = movementValidator(coordinates);

  const movements = {
    lowerLeftSide: {
      wide: ({ position, move }: Movement): Movement | undefined => {
        if(isMovementValid(position)) 
          return { position: `${String.fromCharCode(position.charCodeAt(0) - 2)}${Number(position[1]) - 1}`, move: move + 1 };
      },
      deep: ({ position, move }: Movement): Movement | undefined => {
        if(isMovementValid(position)) 
          return { position: `${String.fromCharCode(position.charCodeAt(0) - 1)}${Number(position[1]) - 2}`, move: move + 1 };
      }
    },
    lowerRightSide: {
      wide: ({ position, move }: Movement): Movement | undefined => {
        if(isMovementValid(position)) 
          return { position: `${String.fromCharCode(position.charCodeAt(0) + 2)}${Number(position[1]) - 1}`, move: move + 1 };
      },
      deep: ({ position, move }: Movement): Movement | undefined => {
        if(isMovementValid(position)) 
          return { position: `${String.fromCharCode(position.charCodeAt(0) + 1)}${Number(position[1]) - 2}`, move: move + 1 };
      }
    },
    upperRightSide: {
      wide: ({ position, move }: Movement): Movement | undefined => {
        if(isMovementValid(position)) 
          return { position: `${String.fromCharCode(position.charCodeAt(0) + 2)}${Number(position[1]) + 1}`, move: move + 1 };
      },
      deep: ({ position, move }: Movement): Movement | undefined => {
        if(isMovementValid(position)) 
          return { position: `${String.fromCharCode(position.charCodeAt(0) + 1)}${Number(position[1]) + 2}`, move: move + 1 };
      }
    },
    upperLeftSide: {
      wide: ({ position, move }: Movement): Movement | undefined => {
        if(isMovementValid(position)) 
          return { position: `${String.fromCharCode(position.charCodeAt(0) - 2)}${Number(position[1]) + 1}`, move: move + 1 };
      },
      deep: ({ position, move }: Movement): Movement | undefined => {
        if(isMovementValid(position)) 
          return { position: `${String.fromCharCode(position.charCodeAt(0) - 1)}${Number(position[1]) + 2}`, move: move + 1};
      }
    },
  };
  
  return movements[coordinates.direction][coordinates.depth];
}
import { Movement, PossibleMovement } from "../../interfaces/shortestKnightPath";
import { isMovementValid } from "./movementValidator";

export const movements = {
    lowerLeftSide: {
      wide: (start: string, possibleMovements: Array<PossibleMovement>, move: number, movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push({ position: `${String.fromCharCode(start.charCodeAt(0) - 2)}${Number(start[1]) - 1}`, move });
      },
      deep: (start: string, possibleMovements: Array<PossibleMovement>, move: number, movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push({ position: `${String.fromCharCode(start.charCodeAt(0) - 1)}${Number(start[1]) - 2}`, move });
      }
    },
    lowerRightSide: {
      wide: (start: string, possibleMovements: Array<PossibleMovement>, move: number, movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push({ position: `${String.fromCharCode(start.charCodeAt(0) + 2)}${Number(start[1]) - 1}`, move });
      },
      deep: (start: string, possibleMovements: Array<PossibleMovement>, move: number, movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push({ position: `${String.fromCharCode(start.charCodeAt(0) + 1)}${Number(start[1]) - 2}`, move });
      }
    },
    upperRightSide: {
      wide: (start: string, possibleMovements: Array<PossibleMovement>, move: number, movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push({ position: `${String.fromCharCode(start.charCodeAt(0) + 2)}${Number(start[1]) + 1}`, move });
      },
      deep: (start: string, possibleMovements: Array<PossibleMovement>, move: number, movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push({ position: `${String.fromCharCode(start.charCodeAt(0) + 1)}${Number(start[1]) + 2}`, move });
      }
    },
    upperLeftSide: {
      wide: (start: string, possibleMovements: Array<PossibleMovement>, move: number, movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push({ position: `${String.fromCharCode(start.charCodeAt(0) - 2)}${Number(start[1]) + 1}`, move });
      },
      deep: (start: string, possibleMovements: Array<PossibleMovement>, move: number, movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push({ position: `${String.fromCharCode(start.charCodeAt(0) - 1)}${Number(start[1]) + 2}`, move});
      }
    },
  };
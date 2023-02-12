import { Movement } from "../../interfaces/shortestKnightPath";
import { isMovementValid } from "./movementValidator";

export const movements = {
    lowerLeftSide: {
      wide: (start: string, possibleMovements: Array<string>,movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push(`${String.fromCharCode(start.charCodeAt(0) - 2)}${Number(start[1]) - 1}`);
      },
      deep: (start: string, possibleMovements: Array<string>,movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push(`${String.fromCharCode(start.charCodeAt(0) - 1)}${Number(start[1]) - 2}`);
      }
    },
    lowerRightSide: {
      wide: (start: string, possibleMovements: Array<string>,movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push(`${String.fromCharCode(start.charCodeAt(0) + 2)}${Number(start[1]) - 1}`);
      },
      deep: (start: string, possibleMovements: Array<string>,movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push(`${String.fromCharCode(start.charCodeAt(0) + 1)}${Number(start[1]) - 2}`);
      }
    },
    upperRightSide: {
      wide: (start: string, possibleMovements: Array<string>,movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push(`${String.fromCharCode(start.charCodeAt(0) + 2)}${Number(start[1]) + 1}`);
      },
      deep: (start: string, possibleMovements: Array<string>,movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push(`${String.fromCharCode(start.charCodeAt(0) + 1)}${Number(start[1]) + 2}`);
      }
    },
    upperLeftSide: {
      wide: (start: string, possibleMovements: Array<string>,movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push(`${String.fromCharCode(start.charCodeAt(0) - 2)}${Number(start[1]) + 1}`);
      },
      deep: (start: string, possibleMovements: Array<string>,movement: Movement) => {
        if(isMovementValid(start, movement)) 
          possibleMovements.push(`${String.fromCharCode(start.charCodeAt(0) - 1)}${Number(start[1]) + 2}`);
      }
    },
  };
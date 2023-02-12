import { Movement } from "../../interfaces/shortestKnightPath";

export function isMovementValid(start: string, movement: Movement): boolean {

  const validator = {
    lowerLeftSide: {
      wide: (): boolean => start.charCodeAt(0) > 98 && Number(start[1]) > 1,
      deep: (): boolean => start.charCodeAt(0) > 97 && Number(start[1]) > 2
    },
    upperLeftSide: {
      wide: (): boolean => start.charCodeAt(0) > 98 && Number(start[1]) < 8,
      deep: (): boolean => start.charCodeAt(0) > 97 && Number(start[1]) < 7
    },
    lowerRightSide: {
      wide: (): boolean => start.charCodeAt(0) < 103 && Number(start[1]) > 1,
      deep: (): boolean => start.charCodeAt(0) < 104 && Number(start[1]) > 2
    },
    upperRightSide: {
      wide: (): boolean => start.charCodeAt(0) < 103 && Number(start[1]) < 8,
      deep: (): boolean => start.charCodeAt(0) < 104 && Number(start[1]) < 7
    },
  };

  return validator[movement.direction][movement.depth]();
}
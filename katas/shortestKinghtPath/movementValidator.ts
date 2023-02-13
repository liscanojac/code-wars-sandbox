import { Coordinates } from "../../interfaces/shortestKnightPath";

export function movementValidator(coordinates: Coordinates): (start: string) => boolean {

  const validator = {
    lowerLeftSide: {
      wide: (start: string): boolean => start.charCodeAt(0) > 98 && Number(start[1]) > 1,
      deep: (start: string): boolean => start.charCodeAt(0) > 97 && Number(start[1]) > 2
    },
    upperLeftSide: {
      wide: (start: string): boolean => start.charCodeAt(0) > 98 && Number(start[1]) < 8,
      deep: (start: string): boolean => start.charCodeAt(0) > 97 && Number(start[1]) < 7
    },
    lowerRightSide: {
      wide: (start: string): boolean => start.charCodeAt(0) < 103 && Number(start[1]) > 1,
      deep: (start: string): boolean => start.charCodeAt(0) < 104 && Number(start[1]) > 2
    },
    upperRightSide: {
      wide: (start: string): boolean => start.charCodeAt(0) < 103 && Number(start[1]) < 8,
      deep: (start: string): boolean => start.charCodeAt(0) < 104 && Number(start[1]) < 7
    },
  };

  return validator[coordinates.direction][coordinates.depth];
}
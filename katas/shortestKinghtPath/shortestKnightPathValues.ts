// https://www.codewars.com/kata/549ee8b47111a81214000941
import { board_values } from "./boardValues";
import { getPositionValue } from "./getPositionValue";

export function knight(start: string, finish: string): number {

  return board_values[getPositionValue(start)][getPositionValue(finish)];
}
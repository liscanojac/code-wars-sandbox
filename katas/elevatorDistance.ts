// https://www.codewars.com/kata/59f061773e532d0c87000d16

export function elevatorDistance(floors: Array<number>): number {
  let distance = 0;

  for (let i = 1; i < floors.length; i++) {

    distance += (floors[i] - floors[i - 1]) < 0 ? (floors[i] - floors[i - 1]) * -1 : floors[i] - floors[i - 1];
  }
  return distance;
}
//https://www.codewars.com/kata/555624b601231dc7a400017a

function lastSurvivor(numberOfSoldiers: number, josephusFactor: number): number {
  let lastSurvivor: number = 0;
  if (!numberOfSoldiers || !josephusFactor) return lastSurvivor;
  if (numberOfSoldiers === 1 || josephusFactor === 1) return numberOfSoldiers;

  const soldiers: Array<number> = getSoldiersArray(numberOfSoldiers);
  let i = 0;

  while (soldiers.length > 1) {
    i = (i + josephusFactor - 1) % soldiers.length;
    soldiers.splice(i, 1);
  }
  return soldiers[0];
}

function getSoldiersArray(numberOfSoldiers: number): Array<number> {

  const soldiersArr: Array<number> = [];

  for (let i = 1; i <= numberOfSoldiers; i++) {
    soldiersArr.push(i);
  }
  return soldiersArr;
}
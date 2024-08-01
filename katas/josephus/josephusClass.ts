

interface JosephusInterface {
  findLastSurvivor(soldiers: Array<number> | number, josephusFactor: number): number;
  soldiersPermutation(soldiers: Array<number> | number, josephusFactor: number): Array<number>;
}

interface LastInteration {
  soldiers: Array<number>;
  soldiersNum: number;
  josephusFactor: number;
}

export class Josephus implements JosephusInterface {
  private lastSurvivor: number = 0;
  private soldiersPermuted: number[] = [];
  private lastIteration: LastInteration = {
    soldiers: [],
    soldiersNum: 0,
    josephusFactor: 0
  };
  private getSoldiersArray(numberOfSoldiers: number | Array<number>): Array<number> {

    if (numberOfSoldiers instanceof Array) return numberOfSoldiers;

    const soldiersArr: Array<number> = [];

    for (let i = 1; i <= numberOfSoldiers; i++) {
      soldiersArr.push(i);
    }
    return soldiersArr;
  };
  private wasAlreadyCalculated(numberOfSoldiers: number | Array<number>, josephusFactor: number): boolean {

    return josephusFactor === this.lastIteration.josephusFactor && numberOfSoldiers instanceof Array ? JSON.stringify(numberOfSoldiers) === JSON.stringify(this.lastIteration.soldiers) : numberOfSoldiers === this.lastIteration.soldiersNum;
  };
  private setLastIteration(soldiers: Array<number>, josephusFactor: number) {
    this.lastIteration.josephusFactor = josephusFactor;
    this.lastIteration.soldiers = soldiers.slice();
    this.lastIteration.soldiersNum = soldiers[soldiers.length - 1];
  };
  private josephusPermutation(soldiers: Array<number>, josephusFactor: number) {
    if (!soldiers.length || !josephusFactor) {
      this.lastSurvivor = 0;
      this.soldiersPermuted = [];
      return;
    }
    if (soldiers.length === 1 || josephusFactor === 1) {
      this.lastSurvivor = soldiers[soldiers.length - 1];
      this.soldiersPermuted = soldiers;
      return;
    }
    
    this.soldiersPermuted = [];
    let i = 0;
    while (soldiers.length > 0) {
      i = (i + josephusFactor - 1) % soldiers.length;
      if (soldiers.length === 1) this.lastSurvivor = soldiers[0];
      this.soldiersPermuted = this.soldiersPermuted.concat(soldiers.splice(i, 1));
    }
  };
  findLastSurvivor(soldiers: number | Array<number>, josephusFactor: number): number {

    if (this.wasAlreadyCalculated(soldiers, josephusFactor)) return this.lastSurvivor;

    const soldiersArr = this.getSoldiersArray(soldiers);

    this.setLastIteration(soldiersArr, josephusFactor);

    this.josephusPermutation(soldiersArr, josephusFactor);

    return this.lastSurvivor;
  };
  soldiersPermutation(soldiers: Array<number> | number, josephusFactor: number): Array<number> {

    if (this.wasAlreadyCalculated(soldiers, josephusFactor)) return this.soldiersPermuted;

    const soldiersArr = this.getSoldiersArray(soldiers);

    this.setLastIteration(soldiersArr, josephusFactor);

    this.josephusPermutation(soldiersArr, josephusFactor);

    return this.soldiersPermuted;
  }
}
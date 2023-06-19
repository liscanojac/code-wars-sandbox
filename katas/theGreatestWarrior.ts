// https://www.codewars.com/kata/5941c545f5c394fef900000c

type Rank = "Pushover" | "Novice" | "Fighter" | "Warrior" | "Veteran" | "Sage" | "Elite" | "Conqueror" | "Champion" | "Master" | "Greatest";
type Trainee = [string, number, number];
type BattleResult = "Invalid level" | "You've been defeated" | "Easy fight" | "A good fight" | "An intense fight"; 

export class Warrior {
  #experience: number = 100;
  #achievements: Array<string> = [];

  experience(): number {
    return this.#experience;
  }

  achievements(): Array<string> {
    return this.#achievements;
  }

  level(): number {
    return Math.floor(this.#experience / 100);
  }

  rank(): Rank {
    const ranks: Array<Rank> = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

    return ranks[this.#getRank()];
  }

  training(rival: Trainee): string {
    const [description, expPoints, minLevel] = rival;

    if (!this.#isLevelValid(minLevel)) return "Invalid level";
    if (minLevel > this.level()) return "Not strong enough";

    this.#increaseExperience(expPoints);
    this.#achievements.push(description);

    return description;
  }

  battle(rivalLevel: number): BattleResult {
    if (!this.#isLevelValid(rivalLevel)) return "Invalid level";

    const levelDiff = rivalLevel - this.level();
    const rankDiff = this.#getRank(rivalLevel) - this.#getRank();

    if (rankDiff >= 1 && levelDiff >= 5) return "You've been defeated";
    if (levelDiff < -1) return "Easy fight";
    if(levelDiff === 0 || levelDiff === -1) {
      this.#increaseExperience(levelDiff ? 5 : 10);
      return "A good fight";
    }
    this.#increaseExperience(20 * levelDiff * levelDiff);
    return "An intense fight";
  }

  #isLevelValid(level: number): boolean {
    return level > 0 && level < 101;
  }

  #increaseExperience(exp: number) {
    this.#experience = this.#experience + exp > 10000 ? 10000 : this.#experience + exp;
  }

  #getRank(level: number = this.level()): number {
    return Math.floor(level / 10);
  }
}
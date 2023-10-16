// https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4

type Animal = {
  name: string;
  numberOfLegs: number;
};

export function sortAnimals(animals: Array<Animal>): Array<Animal> {

  const animalsDeepCopy: Array<Animal> = JSON.parse(JSON.stringify(animals));

  animalsDeepCopy.sort((a, b) => 
    a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
  );

  return animalsDeepCopy;
}
// https://www.codewars.com/kata/6474b8964386b6795c143fd8

export function bestPlanet(planets: Array<string>, maxSize: number): string {

  const basicLifeElements = ["H", "O", "N", "C", "P", "Ca"];
  const bestSuitedPlanet = {
    size: 0,
    name: ''
  };

  for (let i = 0; i < planets.length; i++) {

    const planetData = planets[i].split('_');
    const planetElements = getPlanetElements(planetData[0]);
    const planetSize = Number(planetData[1]);

    if (maxSize >= planetSize && planetSize > bestSuitedPlanet.size) {

      if (basicLifeElements.every(lifeElement => planetElements.includes(lifeElement))) {
        bestSuitedPlanet.size = planetSize;
        bestSuitedPlanet.name = planets[i];
      } 
    }
  }
  return bestSuitedPlanet.name;
}

function getPlanetElements(elements: string): Array<string> {

  const resultElements: Array<string> = [];

  for (let i = 0; i < elements.length; i++) {

    if (elements.charCodeAt(i) <= 90 && elements.charCodeAt(i) >= 65) {
      resultElements.push(elements[i]);
    } else {
      resultElements[resultElements.length - 1] += elements[i]; 
    }
  }
  return resultElements;
}
// https://www.codewars.com/kata/52fb87703c1351ebd200081f

export function whatCentury(year: string): string {

  const century = Number(year.substring(2)) > 0 ? 
              `${Number(year.substring(0, 2)) + 1}` : 
              year.substring(0, 2);

  const ordinalSuffix = {
    1: "st",
    2: "nd",
    3: "rd"
  };

  return ordinalSuffix[century.substring(1)] && century.substring(0, 1) !== '1' ? 
        `${century}${ordinalSuffix[century.substring(1)]}` :
        `${century}th`;
}
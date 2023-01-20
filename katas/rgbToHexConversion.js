// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {

  return valueToHEX(r) + valueToHEX(g) + valueToHEX(b);
}

function valueToHEX(value) {

  if (value > 255) return "FF";
  if (value < 0) return "00";

  return value.toString(16).padStart(2, '0').toUpperCase();
}

module.exports = {
  rgb
}
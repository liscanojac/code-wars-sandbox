// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c

function luckCheck(ticket) {

  if (!ticket || typeof ticket !== 'string' || ticket !== ticket.toLowerCase() || containsWhitespace(ticket) || !containsOnlyNumbers(ticket)) {
    throw new Error("illegal characters");
  }

  const leftHalf = ticket.substring(0, Math.floor(ticket.length / 2));
  const rightHalf = ticket.substring(Math.ceil(ticket.length / 2));

  return ticketSum(leftHalf) === ticketSum(rightHalf);
}

function containsWhitespace(str) {
  return /\s/.test(str);
}

function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}

function ticketSum(ticket) {

  return ticket.split('').reduce((accumulator, value) => {
    return Number(accumulator) + Number(value);
  }, 0);
}

module.exports = {
  luckCheck
}
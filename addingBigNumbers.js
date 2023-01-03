// https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b) {

  const lengthDiff = a.length - b.length

  if (lengthDiff > 0) {
    b = '0'.repeat(lengthDiff) + b;
  } else {
    a = '0'.repeat(lengthDiff * -1) + a;
  }

  let result = '';
  let remaining = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = (Number(a[i]) + Number(b[i]) + remaining).toString();

    if (sum.length === 1 || i === 0) {
      result = sum + result;
      remaining = 0;
    } else {
      result = sum.substring(1) + result;
      remaining = Number(sum.substring(0, 1));
    }
  }
  return formatString(result);
}

function firstNonZeroIndex(n) {

  for (let i = 0; i < n.length; i++) {

    if (n[i] !== "0") return i;
  }
  return n.length;
}

function formatString(n) {

  const nonZeroIndex = firstNonZeroIndex(n);

  if (nonZeroIndex === n.length) return "";

  return n.substring(nonZeroIndex);
}
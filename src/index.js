module.exports = function reverse (n) {
  let result = n.toString();

  if (result[0] === '-') {
    result = result.slice(1);
  }

  result = Number(result.split('').reverse().join(''));

  return result;
}

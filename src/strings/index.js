const split = (str, delim) => {
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let final;
  let arr = [];
  for(let i = 0; i <= str.length - 1; i += 2) {
    final = str.substr(i, 2)
    arr.push(final)
  }
  return arr
}


const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}
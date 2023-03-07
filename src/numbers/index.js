const isEven = (num) => {
  if(num % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(isEven(2))

const sum = (arr) => {
  // write code for numbers.sum
  for(let i = 0; i < arr.length; i++){
     arr.reduce()
  }
  return arr
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}
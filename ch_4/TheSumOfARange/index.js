function range(start, end, step = 1) {
  let numbers = []
  numbers.push(start)
  
  do {
    start += step;
    numbers.push(start)
  } while (start !== end)

  return numbers
}

function sum(numbers){
  // let total = 0
  // for (let number of numbers) {
  //   total += number
  // }
  // return total

  return numbers.reduce(((total, number) => {
    total += number
    return total
  }), 0)
}


console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
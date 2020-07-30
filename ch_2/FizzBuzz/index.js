function fizzBuzz(counter) {
  for (let x = 1; x <= counter; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
      console.log('FizzBuzz')
      continue
    }

    if (x % 3 === 0) {
      console.log('Fizz')
      continue
    }

    if (x % 5 === 0) {
      console.log('Buzz')
      continue
    }

    console.log(x)
  }
}

fizzBuzz(100)
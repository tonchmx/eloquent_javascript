function triangle(size) {
  for (let x = 1; x <= size; x++) {
    console.log(`${Array(x).fill('#').join('')}`)
  }
}

triangle(7)
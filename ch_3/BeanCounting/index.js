function countBs(text) {
  return countChar(text, 'B')
}

function countChar(text, char) {
  let counter = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) counter++
  }
  return counter
}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
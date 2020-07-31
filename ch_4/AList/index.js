function arrayToList(array) {
  let list = null
  for (let i = array.length - 1; i > -1; i--) {
    list = {
      value: array[i],
      rest: list
    }
  }
  return list
}

function listToArray(list) {
  let array = []

  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }

  return array
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  }
}

function nth(list, number) {
  // let counter = 0
  // let result = undefined
  // for (let node = list; node; node = node.rest) {
  //   if (counter === number) {
  //     result = node.value || undefined
  //     break
  //   }
  //   counter++
  // }
  // return result

  if (!list) return undefined
  if (number === 0) return list.value
  return nth(list.rest, number - 1)
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

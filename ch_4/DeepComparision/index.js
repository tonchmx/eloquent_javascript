function deepEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) return false

  for (let key of obj1Keys) {
    if (typeof obj1[key] === 'object') return deepEqual(obj1[key], obj2[key])
    if (obj1[key] === obj2[key]) {
      return true
    }
  }
  
  return false
}

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));

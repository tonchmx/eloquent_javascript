# Reversing an Array

Write two functions, `reverseArray` and `reverseArrayInPlace`. The first, `reverseArray`, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, `reverseArrayInPlace`, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

```
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```

## To test

Run `$ node index.js`

## Book solution
[<https://eloquentjavascript.net/code/#4.2>](https://eloquentjavascript.net/code/#4.2)
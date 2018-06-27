# Code

This is the code we worked on so faar.

```
/**
 * Refactor code to comply with the original spec.
 * Hint: Chnage the function definition.
 * 
 * The original spec:
 * 
 * Create a function that takes two arrays
 * and interweave their elements
 * and returns the result in a new array:
 * 
 * array1 = [A, B, C];
 * array2 = [X, Y, Z];
 */

var weave = function (a1, a2) {

  var l = Math.min(a1.length, a2.length);

  var arrayInterweaver = [];

  for (var i = 0; i < l; i++) {

    arrayInterweaver.push(a1[i], a2[i]);

  };

  return arrayInterweaver;

}

console.log(weave(['A', 'B', 'C'], ['X', 'Y', 'Z']));
```

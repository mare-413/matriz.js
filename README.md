# matriz.js
Bare bones Matrix library in 300 lines.

```javascript
//Creating an empty 5x5 matrix
let m = new Matrix(5, 5);
//Objects stores 'rows', 'cols', and a 2D array 'vals'.

//Randomizing the matrix with numbers from -1 to 1
m.randomize(-1, 1);

//Applying a function over all numbers in the matrix.
m.do((v, r, c) => {
  if(v < 0) return -1;
  else return 1;
});

//Basic operations
m.add(4);
m.sub(1);
m.mult(3);
m.pow(4);

//Functions can be chained together
m.add(4).sub(1).mult(3).print();

//Other functions
m.transpose();
m.sum();
m.copy();
m.empty();
m.toArray();
m.size();

//Some functions are also static
Matrix.empty(m);
Matrix.randomize(m);
Matrix.fromArray(array);

//Code is easy to read if you have any doubts or want to explore other functionality
```

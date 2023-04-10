// Assignment 1

// 1. Using iteration, write a function fibs which takes a number and returns
// an array containing that many numbers from the fibonacci sequence.
// Using an example input of 8,
// this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

const fibs = (num) => {
  const array = [];
  let fib = 0;

  for (let i = 0; i < num; i++) {
    if (i === 0) {
      array.push(i);
    } else if (i <= 2) {
      array.push(1);
    } else if (i > 2) {
      fib = array[i - 1] + array[i - 2];
      array.push(fib);
    }
  }

  return array;
};

const num = 8;

console.log(fibs(num));

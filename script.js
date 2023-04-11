// Assignment 1

// 1. Using iteration, write a function fibs which takes a number and returns
// an array containing that many numbers from the fibonacci sequence.
// Using an example input of 8,
// this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

const fibs = (num) => {
  const array = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      array[i] = 0;
    } else if (i <= 2) {
      array[i] = 1;
    } else if (i > 2) {
      array[i] = array[i - 1] + array[i - 2];
    }
  }
  return array;
};

// const num = 8;

// console.log(fibs(num)); // [0, 1, 1, 2, 3, 5, 8, 13]

// Assignment 1.2
// Now write another method fibsRec which solves the same problem recursively

const fibsRec = (num) => {
  if (num === 0) {
    return [0];
  }
  if (num <= 2) {
    return [0, 1];
  }
  const prevFibsArray = fibsRec(num - 1);
  const currentFib =
    prevFibsArray[prevFibsArray.length - 1] +
    prevFibsArray[prevFibsArray.length - 2];
  return [...prevFibsArray, currentFib];
};

// console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// fibsRec(4) = new array from fibsRec(3) = [0,1,1] + [2]
//  fibsRec(3) = new array fibsRec(2) = [0,1] + [1]
//    fibsRec(2) = [0,1]

// Assignment 2
// Build a function mergeSort that takes in an array and returns a sorted array,
// using a recursive merge sort methodology

const merge = (leftSubArray, rightSubArray) => {
  const newArray = [];

  while (leftSubArray.length && rightSubArray.length) {
    if (leftSubArray[0] < rightSubArray[0]) {
      newArray.push(leftSubArray.shift());
    } else {
      newArray.push(rightSubArray.shift());
    }
  }

  return [...newArray, ...leftSubArray, ...rightSubArray];
};

console.log(merge([1, 4], [2, 6, 9]));

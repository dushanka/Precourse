// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
    return (arr[0]);
}

function returnLast(arr) {
  // return the last item of the array
    return (arr.slice(-1)[0]);
}
    
function getArrayLength(arr) {
  // return the length of the array
    return (arr.length);
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
    const addOne = arr.map((x) => {
    return x + 1;
  });
  return addOne;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
    arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
    arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
    return words.join(' ');
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;  
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum;  
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
    let sum = 0; for (let i = 0; i < testScores.length; i++) {
    sum += parseInt(testScores[i], 10);
  }
    const AverageTestScore = sum / testScores.length;
    return AverageTestScore;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
    let i = 0;
    const n = numbers.length;
    let m = -Infinity;
    for (; i !== n; ++i) { if (numbers[i] > m) { m = numbers[i]; } } return m;
}
    largestNumber[2, 2, 1, 2, 1];

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
};

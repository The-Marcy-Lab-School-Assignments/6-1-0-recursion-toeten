// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr) => {
if (arr.length === 0) return 0
return arr[0] + sum(arr.slice(1))
}

// Reverse string using recursive approach
const reverse = (str) => {
  if(str.length <= 1) return str
  else return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1))
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  let a = 0, b =1
  for(let i = 0; i < n; i++) {
    [a, b] = [b, a + b]
  }
  return a
};

// Recursive fibonacci
const fibRec = (n) => {
  if(n <= 1) return n
  else return fibRec(n - 1) + fibRec(n - 2)
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if(start > end) return -1
  const mid = Math.floor((start+end)/2) // Calculate the middle index
  if(arr[mid]=== target) return mid// Base case: target found

  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1)
  else return binarySearch(arr, target, mid + 1, end)
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };

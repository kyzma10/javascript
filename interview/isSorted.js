function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(isSorted([]));                        // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]));  // true
console.log(isSorted([3, 9, -3, 10]));            // false

function indexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val)
      return i
  }
  return -1;
}

/*tests*/
console.log(indexOf([1, 2, 3], 1));               // 0
console.log(indexOf([1, 2, 3], 4));               // -1

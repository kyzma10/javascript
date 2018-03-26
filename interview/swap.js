function swap(x, y) {
  [x, y] = [y, x];
  return `x = ${x}; y = ${y};`;
}

/*tests*/
console.log(swap(3, 47));
console.log(swap(5, 67));

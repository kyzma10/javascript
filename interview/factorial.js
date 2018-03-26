function factorial(number) {
  if (number < 0)
    return false;

  if (number === 0 || number === 1)
    return 1;

  if (number > 1)
    return factorial(number - 1) * number;

}

/*tests*/
console.log(factorial(-3))                        // false
console.log(factorial(0))                        // 1
console.log(factorial(1))                        // 1
console.log(factorial(6))                        // 720
console.log(factorial(12))                        // 479001600

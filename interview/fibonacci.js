function fib(number) {
  if (number < 0)
    return false;

  if (number === 0)
    return 0;

  if (number === 1 || number === 2)
    return 1;

  if (number > 2)
    return fib(number - 1) + fib(number - 2);
}

/*tests*/
console.log(fib(0));                              // 0
console.log(fib(1));                             // 1
console.log(fib(10));                             // 55
console.log(fib(20));                             // 6765

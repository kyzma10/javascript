function isPrime(number) {
  if (number < 1 || number === 0 || number === 1)
    return false;

  if (number === 2 || number === 3)
    return true;

  if (number % 1 === 0 && number % number === 0 && number % 2 !==0 && number % 3 !== 0)
    return true;

  return false;
}

/*examples*/

console.log(isPrime(0))                          // false
console.log(isPrime(1))                          // false
console.log(isPrime(2))                          // true
console.log(isPrime(3))                          // true
console.log(isPrime(17))                         // true
console.log(isPrime(199))                         // true
console.log(isPrime(10000000000000))             // false

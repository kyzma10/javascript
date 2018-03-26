function isPalindrome(str) {
  let newstr = str.split(' ');
  str = newstr.join('').toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i])
      return false;
  }
  return true;
}

/*tests*/
console.log(isPalindrome(''));                                // true
console.log(isPalindrome('abcdcba'));                         // true
console.log(isPalindrome('abcd'));                            // false
console.log(isPalindrome('A man a plan a canal Panama'));     // true

function isBalanced(str) {
  const left = str.split('{').length -1;
  const right = str.split('}').length -1;
  if (left === right) {
    if (str.indexOf('{') < str.indexOf('}') && str.indexOf('{') !== -1 && str.indexOf('}') !== -1)
      return true;
  }
  return false;
}

/*tests*/
console.log(isBalanced('}{'));                      // false
console.log(isBalanced('{{}'));                     // false
console.log(isBalanced('{}{}'));                    // true
console.log(isBalanced('foo { bar { baz } boo }')); // true
console.log(isBalanced('foo { bar { baz }'));       // false
console.log(isBalanced('foo { bar } }'));           // false

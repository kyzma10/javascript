function reverse(str) {
    let newstr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newstr += str[i];
    }
    return newstr;


}


/*tests*/

console.log(reverse(''));                         // ''
console.log(reverse('abcdef'));                   // 'fedcba'

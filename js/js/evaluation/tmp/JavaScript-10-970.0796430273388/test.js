/* Test if gniven strig is a palindrome */
const isPalindrome = (string) => {
  return string == string.split('').reverse().join('');
}

/* Find the shortest palindrome that begins with a supplied string.
  Algorithm idea is simple:
  - Find the longest postfix of supplied string that is a palindrome.
  - Append to the end of the string reverse of a string prefix that comes before the palindromic suffix.
  >>> makePalindrome('')
  ''
  >>> makePalindrome('cat')
  'catac'
  >>> makePalindrome('cata')
  'catac'
  */
const makePalindrome = (string) => {
    for (let i = string.length; i > 0; i--) {
        if (isPalindrome(string.substring(0, i))) {
            return string + string.substring(i).split('').reverse().join('');
        }
    }
    return string + string.split('').reverse().join('');
}
const testmakePalindrome = () => {
  console.assert(makePalindrome('') === '')
  console.assert(makePalindrome('x') === 'x')
  console.assert(makePalindrome('xyz') === 'xyzyx')
  console.assert(makePalindrome('xyx') === 'xyx')
  console.assert(makePalindrome('jerry') === 'jerryrrej')
}

testmakePalindrome()

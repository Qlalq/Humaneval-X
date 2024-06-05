/* Input to this function is a string containing multiple groups of nested parentheses. Your goal is to
  separate those group into separate strings and return the list of those.
  Separate groups are balanced (each open brace is properly closed) and not nested within each other
  Ignore any spaces in the input string.
  >>> separateParenGroups('( ) (( )) (( )( ))')
  ['()', '(())', '(()())']
  */
const separateParenGroups = (paren_string) => {
    let result = [];
    let count = 0;
    let currentGroup = '';
    
    for (let char of paren_string.replace(/\s+/g, '')) {  // Remove all spaces
        currentGroup += char;
        
        if (char === '(') {
            count++;
        } else if (char === ')') {
            count--;
        }

        if (count === 0) {
            result.push(currentGroup);
            currentGroup = '';
        }
    }

    return result;
}
const testSeparateParenGroups = () => {
  console.assert(
    JSON.stringify(separateParenGroups('(()()) ((())) () ((())()())')) ===
      JSON.stringify(['(()())', '((()))', '()', '((())()())'])
  )
  console.assert(
    JSON.stringify(separateParenGroups('() (()) ((())) (((())))')) ===
      JSON.stringify(['()', '(())', '((()))', '(((())))'])
  )
  console.assert(
    JSON.stringify(separateParenGroups('(()(())((())))')) ===
      JSON.stringify(['(()(())((())))'])
  )
  console.assert(
    JSON.stringify(separateParenGroups('( ) (( )) (( )( ))')) ===
      JSON.stringify(['()', '(())', '(()())'])
  )
}

testSeparateParenGroups()

/*
  You will be given a string of words separated by commas or spaces. Your task is
  to split the string into words and return an array of the words.
  
  For example:
  wordsString("Hi, my name is John") == ["Hi", "my", "name", "is", "John"]
  wordsString("One, two, three, four, five, six") == ["One", "two", "three", "four", "five", "six"]
  */
const wordsString = (s) => {
    return s.split(/[\s,]+/);

const testWordsString = () => {
  console.assert(
    JSON.stringify(wordsString('Hi, my name is John')) ===
    JSON.stringify(['Hi', 'my', 'name', 'is', 'John'])
  )
  console.assert(
    JSON.stringify(wordsString('One, two, three, four, five, six')) ===
    JSON.stringify(['One', 'two', 'three', 'four', 'five', 'six'])
  )
  console.assert(
    JSON.stringify(wordsString('Hi, my name')) ===
    JSON.stringify(['Hi', 'my', 'name'])
  )
  console.assert(
    JSON.stringify(wordsString('One,, two, three, four, five, six,')) ===
    JSON.stringify(['One', 'two', 'three', 'four', 'five', 'six'])
  )
  console.assert(JSON.stringify(wordsString('')) === JSON.stringify([]))
  console.assert(
    JSON.stringify(wordsString('ahmed     , gamal')) ===
    JSON.stringify(['ahmed', 'gamal'])
  )
}

testWordsString()

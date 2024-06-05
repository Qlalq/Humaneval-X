/*
  Given an array of integers, sort the integers that are between 1 and 9 inclusive,
  reverse the resulting array, and then replace each digit by its corresponding name from
  "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine".

  For example:
    arr = [2, 1, 1, 4, 5, 8, 2, 3]   
          -> sort arr -> [1, 1, 2, 2, 3, 4, 5, 8] 
          -> reverse arr -> [8, 5, 4, 3, 2, 2, 1, 1]
    return ["Eight", "Five", "Four", "Three", "Two", "Two", "One", "One"]
  
    If the array is empty, return an empty array:
    arr = []
    return []
  
    If the array has any strange number ignore it:
    arr = [1, -1 , 55] 
          -> sort arr -> [-1, 1, 55]
          -> reverse arr -> [55, 1, -1]
    return = ['One']
  */
const byLength = (arr) => {

    const names = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const sortedArr = arr.filter(num => num >= 1 && num <= 9).sort((a, b) => a - b).reverse();
    return sortedArr.map(num => names[num - 1]);
};
const testByLength = () => {
  console.assert(
    JSON.stringify(byLength([2, 1, 1, 4, 5, 8, 2, 3])) ===
    JSON.stringify([
      'Eight',
      'Five',
      'Four',
      'Three',
      'Two',
      'Two',
      'One',
      'One',
    ])
  )
  console.assert(JSON.stringify(byLength([])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(byLength([1, -1, 55])) === JSON.stringify(['One'])
  )
  console.assert(
    JSON.stringify(byLength([1, -1, 3, 2])) ===
    JSON.stringify(['Three', 'Two', 'One'])
  )
  console.assert(
    JSON.stringify(byLength([9, 4, 8])) ===
    JSON.stringify(['Nine', 'Eight', 'Four'])
  )
}

testByLength()

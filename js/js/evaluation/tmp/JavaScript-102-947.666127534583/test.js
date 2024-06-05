/*This function takes two positive numbers x and y and returns the
  biggest even integer number that is in the range [x, y] inclusive. If 
  there's no such number, then the function should return -1.

  For example:
  chooseNum(12, 15) = 14
  chooseNum(13, 12) = -1
  */
const chooseNum = (x, y) => {
    let min = Math.min(x, y);
    let max = Math.max(x, y);

    for (let i = max; i >= min; i--) {
        if (i % 2 === 0) {
            return i;
        }
    }
    return -1;
};
const testChooseNum = () => {
  console.assert(chooseNum(12, 15) === 14)
  console.assert(chooseNum(13, 12) === -1)
  console.assert(chooseNum(33, 12354) === 12354)
  console.assert(chooseNum(5234, 5233) === -1)
  console.assert(chooseNum(6, 29) === 28)
  console.assert(chooseNum(27, 10) === -1)
  console.assert(chooseNum(7, 7) === -1)
  console.assert(chooseNum(546, 546) === 546)
}

testChooseNum()

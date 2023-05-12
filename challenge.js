module.exports = leftmostNodesSum
function leftmostNodesSum(array) {
  let sum = 0;
  let i = 0;
  let levelSize = 1;
  
  while (i < array.length) {
    sum += array[i]; // add the value of the leftmost node to the sum
    i = 2*i + 1; // move to the left child of the current node
    levelSize *= 2; // double the level size for the next iteration
  }
  
  return sum;
}

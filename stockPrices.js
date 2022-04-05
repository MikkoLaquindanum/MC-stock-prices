let maxProfit = 0;
const best = (arr) => {
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] - arr[i] > maxProfit) {
        maxProfit = (arr[j] - arr[i]);
      } 
    }
  } 
  return maxProfit
}

// console.log(maxProfit)
// console.log(best([15, 10, 20, 22, 1, 9]))
// console.log(best([1, 2, 3, 4, 5]))
// console.log(best([2, 3, 10, 6, 4, 8, 1]))
console.log(best([5, 4 , 3, 2, 1]))
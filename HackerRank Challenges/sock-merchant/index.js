// link to question https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(arr, n) {
  let pair = 0
  arr = arr.sort()
  for (let index = 0; index < n; index++) {
    if(arr[index] === arr[index + 1]){
      // skip
      index = index + 1
      pair = pair + 1
    }
  }
  return pair;
}
module.exports = sockMerchant;
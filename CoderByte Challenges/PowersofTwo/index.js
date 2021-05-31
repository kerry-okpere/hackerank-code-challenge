function powersofTwo(num){
  if(num == 0)return false
  while(num !== 1){
    if(num % 2 !== 0) return false
    num = num/2
  }
  return true
}
module.exports = powersofTwo
// link to question https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(steps, path) {
  let seaLevel = 0; let valleyNo = null; let mountNo = null
  let valley = 0; let mountain = 0

  for (let index = 0; index < steps; index++) {
    if (path.chartAt(index) === 'U') {
      console.log(path.chartAt(index))
    } else if(path.chartAt(index) === 'D'){
      console.log(path.chartAt(index))
    }
    // if index is 8 meaning the step is complete
    // and it is sea level
    // how many valley are complete 
      // Valleys are completed if 
    // how many mountains are comple
    
  }


}
countingValleys(8, 'UDDDUDUU')
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  min = 0
  max = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]
      }
      else if (arr[i] < min) {
          min = arr[i]
      }
          sum  += arr[i];   
  }

  if (arr.length) {
      avg = (sum / arr.length).toFixed(2);
      avg = Number(avg);
  } else {
      undefined
  }

  return { min:min, max:max, avg:avg };
}
getArrayParams(-99, 99, 10); 
getArrayParams(1, 2, 3, -100, 10);
getArrayParams(5);


function worker(arr) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
    }
    return sum;
  }
  
  function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    }
  }
  return max;
  }
  

  function worker2(arr) {
    let min = Infinity;
    let max = -Infinity;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
      if (arr[j] < min) {
        min = arr[j];
      }
    }
    return Math.abs(max - min);
  }
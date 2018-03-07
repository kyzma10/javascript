/*make function for find sum elements in array*/

findUnique = (arr) => {
  let result = arr;
  if(result.length > 2) {
    for(let i=0; i < result.length - 2;) {
      for(let j=2; j < result.length;) {
        if(result[i] === result[j] && result[i+1] === result[j+1]) {
          result.splice(j, 2);
        }

        if(result[i] === result[j+1] && result[i+1] === result[j]) {
          result.splice(j, 2);
        }
        j += 2;
      }
      i += 2;
    }
  }
  return result;
}

findSumToArray = (arr, sum) => {
  let result = [];
  for(let i = 0; i < arr.length - 1; i++ ){
    for(let j = 1; j < arr.length; j++){
      if(arr[i] + arr[j] === sum){
        result = [...result, arr[i], arr[j]];
      }
    }
  }
  return findUnique(result);
}


printResult = (arr) => {
  if(arr.length < 2) {
    console.log('No found results');
  } else {
    for(let i=0; i <arr.length;) {
      console.log('(' + arr[i] + ':' + arr[i+1] + ')');
      i += 2;
    }
  }
}


/*testing results*/
printResult(findSumToArray([2,2,4,8,8], 4));
printResult(findSumToArray([1, 6, 5, 2, 7, 5, 1, 4, 3], 5));

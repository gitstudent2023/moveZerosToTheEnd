const arr = [1,2,0,1,0,1,0,3,0,1];

const moveZero = (arr) => {
  let results = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      results.push(arr[i]);
    } else {
      ++count;
    }
  }
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      results.push(0);
    }
  }
  console.log(results);
}

moveZero(arr);
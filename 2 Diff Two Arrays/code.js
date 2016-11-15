
function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = newArr.concat(arr1,arr2); //  [1,2,3,8,5,1,2,3,4,5]
  var filteredArr = newArr.filter(function isIncluded(value){
      return !arr1.includes(value) || !arr2.includes(value); 
  });
  
  return filteredArr;
}

diffArray([1, 2, 3, 8, 5], [1, 2, 3, 4, 5]);

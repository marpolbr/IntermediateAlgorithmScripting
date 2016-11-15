
function sumAll(arr) {
  
  var maxNumber = Math.max.apply(null, arr);
  var minNumber = Math.min.apply(null, arr);
  var sum = 0;
  for(var i=0;i<=(maxNumber-minNumber);i++){
    sum+=minNumber+i;   
  } 
  return sum;
  
}

sumAll([10, 5]);

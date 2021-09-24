// Add your functions here
function map(arry, func) {
  let newArry = []
  for (let i = 0; i < arry.length; i++) {
    newArry.push(func(arry[i]));
  }
  return newArry;
}

function reduce(arry, func, stValue) {
  let newValue;
  if (stValue) {
    newValue = stValue
  for (let i = 0; i < arry.length; i++) {
    newValue = func(arry[i], newValue); 
  }
  return newValue; 
  }
  else {
    newValue = arry[0]
  for (let i = 1; i < arry.length; i++) {
    newValue = func(arry[i], newValue); 
  }
  return newValue
}
}
module.exports = function getZerosCount(number) {
  // your implementation
  
  var zero=0;
  
  for (var i = 5; i <= number; i=i*5) {
   zero += Math.trunc(number/i);
  } 
  
  console.log(zero);
  return (zero);
}

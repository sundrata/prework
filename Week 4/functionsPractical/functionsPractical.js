function actualMath(num0, num1){
  console.log('inside actualMath', num0, num1 );
  let answer = num0 * num1;
  return answer;
}// end actualMath


function logger(){
  console.log('inside logger');
} // end logger

function mathExample(){
  console.log('inside mathExample');
  let answer = 3 * 9;
  return answer;
}// end mathExample

function returner(){
  console.log('inside returner');
  return true;
}// end returner

logger();
returner();
console.log('running returner:', returner() );
console.log('running mathExample:', mathExample() );
console.log('running actualMath with 4 & 6:', actualMath(4,6));
console.log('running actualMath with 7 & 9:', actualMath(7,9));
console.log('running actualMath with 127 & 6:', actualMath(127,6));

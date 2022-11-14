const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
  let ans = 0;
  numArr.forEach(element => {ans += element;});
  return ans;
};

const multiply = function(numArr) {
  let ans = 1;
  numArr.forEach(element => {ans *= element;});
  return ans;
};

const power = function(base, power) {
	return base**power;
};

const factorial = function(num) {
  if(num === 0){return 1;}
  let ans = 1;
  for(let i = 1; i <= num; i++){
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

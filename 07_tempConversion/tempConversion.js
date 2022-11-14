const ftoc = function(degree) {
  let celsius = (degree - 32) * (5/9);
  celsius = Math.round(celsius * 10)/10;
  return celsius;
};

const ctof = function(degree) {
  let farenheit = (degree * (9/5)) + 32;
  farenheit = Math.round(farenheit * 10)/10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

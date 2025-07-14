const convertToCelsius = function(tempInF) {
  let resultInC = (tempInF - 32) * 5/9;
  return Math.round(resultInC * 10) / 10;
};

const convertToFahrenheit = function(tempInC) {
  let resultInF = tempInC * 9/5 + 32;
  return Math.round(resultInF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

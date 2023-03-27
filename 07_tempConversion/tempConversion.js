const convertToCelsius = function(fahrenheitBasis) {
  let fahrenheitTemp = fahrenheitBasis;
  let fToc = Math.round(((fahrenheitTemp - 32) * 5 / 9) * 10) /10;
  return fToc;
};

const convertToFahrenheit = function(celsiusBasis) {
  let celsiusTemp = celsiusBasis;
  let cTof = Math.round((celsiusTemp * 9 /5 + 32) * 10) /10;
  return cTof;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

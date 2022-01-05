const ftoc = function(fahrenheit) {
    let celsius = Number(((fahrenheit - 32) * 5 / 9).toFixed(1));
    return celsius;


};

const ctof = function(celsius) {
    let fahrenheit = Number((((celsius * 9 / 5) + 32).toFixed(1)));
    return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

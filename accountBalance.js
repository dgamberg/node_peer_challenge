var randomNumber = require('./randomNumber');
var convertToUSD = require('./convertToUSD');

var accountBalance = function(){
    return "Your Balance is: \n" + convertToUSD(randomNumber(100, 1000000));
}

module.exports = accountBalance;
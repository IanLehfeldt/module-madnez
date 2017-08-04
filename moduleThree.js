var convertToDollars = require('./convertToDollars.js');
var randomNumber = require('./randomNumber.js');

var newCurrency = convertToDollars(randomNumber(100,1000000));

//Testing if new currency can be called
//console.log(newCurrency);

module.exports = {
    accountBalance: 'Account balance: <br>',
    currency: newCurrency
}
function convertToDollars (num) {
   return '$' + num.toLocaleString({style: 'currency', currency: 'USD'})
}

//function should return $123,456,789
//console.log(convertToDollars(123456789));

module.exports = convertToDollars;



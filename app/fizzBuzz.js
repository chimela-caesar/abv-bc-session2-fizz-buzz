'use strict';

var exports = module.exports = {};

exports.fizzBuzz = function(num)
{
  if (num % 3 === 0 || num % 5 === 0) {
    let result = '';
	
    if (num % 3 === 0) result += 'Fizz';
	if (num % 5 === 0) result += 'Buzz';
	
	return result;
  } 
  return num; 
};

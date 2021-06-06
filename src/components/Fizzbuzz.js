import React from 'react';

const Fizzbuzz = ({ number }) => {
	function calcFizz(num) {
		if (num === 0) {
			return;
		}
		if (num % 5 === 0 && num % 3 === 0) {
			return `FizzBuzz!`;
		} else if (number % 3 === 0) {
			return `Fizz`;
		} else if (number % 5 === 0) {
			return `Buzz`;
		}
	}

	return <span className={number % 3 === 0 && number % 5 === 0 && `bold-display`}> {calcFizz(number)} </span>;
};

export default Fizzbuzz;

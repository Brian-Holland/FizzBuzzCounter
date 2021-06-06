import React, { useState } from 'react';
import Fizzbuzz from './Fizzbuzz';

const Counter = () => {
	const [ count, setCount ] = useState(0);

	return (
		<div className="main-display">
			<h1>FizzBuzz Counter</h1>
			<br />
			<div className="abs-fb">
				<Fizzbuzz number={count} />
			</div>

			<p className="count-display">The current count is: {count}</p>
			<div>
				<button className="count-button" onClick={() => setCount(count - 1)}>
					-1
				</button>
				<span> Count </span>
				<button className="count-button" onClick={() => setCount(count + 1)}>
					+1
				</button>
			</div>

			<button className="reset-button" onClick={() => setCount(0)}>
				Reset
			</button>
		</div>
	);
};

export default Counter;

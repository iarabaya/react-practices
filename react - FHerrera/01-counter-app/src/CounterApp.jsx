import PropTypes from 'prop-types';
import { useState } from 'react';


const CounterApp = ({value}) => {

	const [counter, setCounter] = useState(value);
	
	const handleAdd = (e) => {
		setCounter(counter + 1);
		// setCounter( (c) => c + 1 );
	}

	const handleSubstract = (e) => {
		setCounter(counter - 1);
		// setCounter( (c) => c - 1 );
	}
	const handleReset = (e) => {
		setCounter( value );
	}


	return (<>
		<h1>CounterApp</h1>
		<h2>{ counter }</h2>

		<button onClick={handleAdd}>
			+1
		</button>
		<button onClick={handleSubstract}>
			-1
		</button>
		<button onClick={handleReset}>
			reset
		</button>
	</>
	)
}

export default CounterApp

CounterApp.propTypes = {
	value: PropTypes.number.isRequired
}
import PropTypes from 'prop-types';


const CounterApp = () => {
	return (<>
		<h1>CounterApp</h1>
		<h2>{ value }</h2>
	</>
	)
}

export default CounterApp

CounterApp.propTypes = {
	value: PropTypes.number
}
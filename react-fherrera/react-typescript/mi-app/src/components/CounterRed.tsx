import React, { useReducer } from 'react';

const initialState = {
	contador: 0
}

type ActionType = 
	| {type: 'incrementar'}
	| {type: 'decrementar'}
	| {type: 'custom', payload: number}

const contadorReducer = (state: typeof initialState, action: ActionType) => {

	switch(action.type){
		case 'incrementar':
			return { ...state, contador: state.contador + 1 }

		case 'decrementar':
			return { ...state, contador: state.contador - 1 }

		case 'custom':
			return { ...state, contador: action.payload }

		default:
			return state;
	}
}

const CounterRed = () => {
	const [{contador}, dispatch] = useReducer(contadorReducer, initialState);

	return (
		<>
			<h2>Counter: { contador }</h2>
			<button 
				className='btn btn-outline-primary' 
				onClick={ () => dispatch({ type: 'incrementar'})}>
				+1
			</button>

			<button 
				className='btn btn-outline-primary' 
				onClick={ () => dispatch({ type: 'decrementar'})}>
				-1
			</button>

			<button 
				className='btn btn-outline-primary' 
				onClick={ () => dispatch({ type: 'custom', payload: 100})}>
				establecer en 100
			</button>
		</>
	)
}

export default CounterRed
import React from 'react'
import { useTodos } from '../hooks/useTodos';

const Title = () => {

	const { pendingTodos, completedTodos } = useTodos();
	return (
		<>
			<h1>
				Pending Todos: {pendingTodos} 
			</h1>
			<h1>
				Completed: {completedTodos} 
			</h1>
		</>
	)
}

export default Title
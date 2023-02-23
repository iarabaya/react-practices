import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {
	const { toggleTodo, todoState } = useContext(TodoContext);
	const {todos} = todoState

	return {
		todos: todos,
		pendingTodos: todos.filter(todo => !todo.completed).length,
		completedTodos: todos.reduce( (acc, current) => current.completed? acc + 1 : acc , 0),
		toggleTodo
	}
}
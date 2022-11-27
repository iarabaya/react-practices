import { TodoContext } from "./TodoContext"
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from "./todoReducer";
import { useReducer } from "react";

const INITIAL_STATE : TodoState= {
	todoCount: 2,
	todos: [
		{
			id: '1',
			desc: 'Recolectar las piedras del infinito',
			completed: false
		},
		{
			id: '2',
			desc: 'Visitar Doctor Strange',
			completed: false
		},
	],
	completed: 0,
	pending: 2
}

// interface TodoProviderProps
interface props {
	children: JSX.Element | JSX.Element[]
}

const TodoProvider = ({ children }: props) => {

	const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

	const toggleTodo = (id: string) =>{
		dispatch({ type: 'toggleTodo', payload: { id } })
	}

	return (
		<TodoContext.Provider value={{ todoState, toggleTodo }}>
			{ children }
		</TodoContext.Provider>
	)
}

export default TodoProvider
import TodoProvider from './context/TodoProvider';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import Title from './components/Title';

const Todo = () => {

	return (
		<TodoProvider>
			<Title/>
			<TodoList/>
		</TodoProvider>
	)
}

export default Todo
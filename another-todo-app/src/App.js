import React, {useState, useRef, useEffect} from 'react';
// import './App.css';
import TodoList from './Components/TodoList';

const KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([{id:1, task: 'Tarea 1', completed: false}]);
  const todoTaskRef = useRef();

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if(storedTodos){
      setTodos(storedTodos);
    }
  }, []); //al principio de la app retoma los todos guardados en localStorage

  useEffect(() =>{
    localStorage.setItem(KEY, JSON.stringify(todos))
  }, [todos]); //cada vez que haya un cambio en la lista de todos que los guarde en localStorage

  const handleTodoAdd = () =>{
    const tarea = todoTaskRef.current.value;
    if (tarea === '') return;

    setTodos((prevTodos) =>{
      return [...prevTodos, {id: prevTodos.length +1, task: tarea, completed: false}]
    });

    todoTaskRef.current.value = null;
  }

  const handleClearAll = () =>{
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  const toggleTodo = (id) =>{
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id); //busca la tarea segun id
    todo.completed = !todo.completed; //le cambia el estado completed a false si estaba true y viceversa
    setTodos(newTodos);
  }

  return (
    <div className="App">
     Hola mundo
     <TodoList todos={ todos } toggleTodo={toggleTodo}/>
     <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
     <button onClick={handleTodoAdd}>Añadir ➕</button>
     <button onClick={handleClearAll}>Eliminar ❌</button>
     <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>
    </div>
  );
}

export default App;

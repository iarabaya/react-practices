/* eslint-disable no-unused-expressions */
import React from 'react'

export default function TodoItem({todo, toggleTodo}) {
    const {id, task, completed} = todo;
    const handleTodoClick =() =>{
        toggleTodo(id); //por props recibe la funcion toggle todo y le pasamos por parametro el argumento id de esta tarea
    }
    return (<li><input type="checkbox" checked={completed} onChange={handleTodoClick}/>{task}</li>)
}

import React, { Component} from 'react';
import PropTypes from 'prop-types'; //ayudan a especificar el tipo de datos de los props

import Task from './Task';

class Tasks extends Component{
    render(){
        return this.props.tareas.map(task => 
        <Task 
            tarea={task} 
            key={task.id} 
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
        />);
    }
}

Tasks.propTypes ={
    tareas: PropTypes.array.isRequired
}

export default Tasks;
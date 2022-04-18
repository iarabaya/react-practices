import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Task extends Component{
    
    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.tarea.done ? 'grey' : 'black',
            textDecoration: this.props.tarea.done ? 'line-through' : 'none'
        }
    }

    render(){

        const {tarea} = this.props;

        return <div style={this.StyleCompleted()}> 
            {tarea.title} - 
            {tarea.description} - 
            {tarea.done} - 
            {tarea.id} 
            <input type="checkbox" onChange={this.props.checkDone.bind(this, tarea.id)}/> 
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, tarea.id)}>
                 X 
                </button>
            </div>
    }
}

Task.propTypes = {
    tarea: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'

}

export default Task
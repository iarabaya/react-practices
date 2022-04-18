import React, {Component} from 'react';

class TaskForm extends Component{ //el export default puede ir directo en la clase
    
    state ={
        title: '',
        description: ''
    }
    
    onSubmit = (event) => {
        
        event.preventDefault();
        this.props.addTask(this.state.title, this.state.description);
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                type="text" 
                name="title"
                placeholder="Write a task" 
                onChange={this.onChange} 
                value={this.state.title}/>

                <br/>
                <br/>

                <textarea 
                name="description"
                placeholder="Write a description" 
                onChange={this.onChange} 
                value={this.state.description}></textarea>
                <br/>

                <input type="submit"/>
            </form>
        )
    }
}

export default TaskForm;
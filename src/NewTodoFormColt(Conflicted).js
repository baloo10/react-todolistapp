import React, { Component } from 'react'
const { v4: uuidv4 } = require('uuid');

class NewTodoFormColt extends Component {
    constructor(props){
        super(props);
        this.state = {task: ""};
        this.handleChange = this.handleChange.bind(this); 
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handelSubmit(evt){
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4(), completed: false});
        this.setState({task: ""})
    }
    render(){
        return (
            <form onSubmit={this.handelSubmit }>
                <label htmlFor="task">New Todo</label>
                <input 
                type="text" 
                placeholder="New Todo" 
                id="task"
                name="task"
                value= {this.state.task}
                onChange={this.handleChange}
                />
                <button> Add todo</button>
            </form>
        )
    }
}

export default NewTodoFormColt;
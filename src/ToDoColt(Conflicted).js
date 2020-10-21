import React, { Component } from 'react'
//import "./Todo.css";
import "./ToDoColt.css";


class ToDoColt extends Component {
    constructor(props){
        super(props); 
        this.state = {isEditing: false, task: this.props.task};
        this.handleRemove = this.handleRemove.bind(this);
        this.toogleForm = this.toogleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove(){
        this.props.removeTodo(this.props.id)
    }

    toogleForm(){
        //if its false, we are setting it to true, if its true, we setting it to false
        this.setState({isEditing : !this.state.isEditing});
    }

    handleUpdate(evt){
        evt.preventDefault();
        //take the new data and pass up to the parent
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleToggle(evt){
        this.props.toggleTodo(this.props.id);
    }
    
    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div className="ToDoColt">
                    <form onSubmit={this.handleUpdate }> 
                        <input 
                        type ="text"
                        value={this.state.task}
                        name="task"
                        onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="ToDoColt">
                    <li 
                        className={
                            this.props.completed ? "Todo-task completed" : "Todo-task"
                        }
                    onClick={this.handleToggle} 
                    >
                        {this.props.task}
                    </li>
                    <div className="Todo-buttons">
                    <button onClick={this.toogleForm}>
                        <i class="fas fa-pen"/>
                    </button>
                    <button onClick={this.handleRemove}>
                        <i class="fas fa-trash"/>
                    </button>
                    </div>
               </div>
            );
        }
        return result;
                
    }
}

export default ToDoColt;
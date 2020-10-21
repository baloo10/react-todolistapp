import React, { Component } from 'react'
import Todo from './Todo';
const { v4: uuidv4 } = require('uuid');


class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            note:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        const newNote = {...this.state, id:uuidv4()};
        this.props.createNote(newNote);
        //resett the form
        this.setState({
            note: ""
        })
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }


    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="note">Todo Note</label>
                    <input
                        type="text"
                        name="note"
                        value={this.state.note}
                        onChange = {this.handleChange}
                    />
                </div>
                <button>Add new todo</button>
            </form>
            </div>
        );
    }
}

export default NewTodoForm;

import React, { Component } from 'react'
import ToDoColt from './ToDoColt';
import NewTodoForm from './NewTodoForm';
import NewTodoFormColt from './NewTodoFormColt';
import './TodoListColt.css';

//import Todo from './Todo';


class ToDoListColt extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    remove(id){
        this.setState({
            //returns a new array, taking away the one item that have the id thats gets passed in
            todos: this.state.todos.filter(todos => todos.id !==id)
        })
    }

    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                //we return the existing todo, but overrides the task inside the todo
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                //we return the existing todo, but overrides the task inside the todo
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }
    render(){
        const todos = this.state.todos.map(todo => {
            return <ToDoColt 
                    key={todo.id} 
                    id={todo.id} 
                    task={todo.task}
                    completed ={todo.completed} 
                    removeTodo={this.remove}
                    updateTodo={this.update}
                    toggleTodo={this.toggleCompletion}
                    />;
        });
        return (
            <div className="TodoListColt">
                <h1>Tod List</h1>
                <NewTodoFormColt createTodo={this.create} />
                <ul>
                   {todos}
                </ul>
            </div>
        )
    }
}

export default ToDoListColt;
import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';


class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes : [
                {note:""}
                
            ],
            isToggle: false
        }
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.isToggle = this.isToggle.bind(this);
    }

    delete(id){
        this.setState({
            //make a new array, with the notes that not contains the id that was passed in
            notes: this.state.notes.filter(note => note.id !==id) 
       
        });
    }

    isToggle(id){
        const currentState = this.state.isToggle;
        this.setState({isToggle: !currentState});
    }

    create(newNote){
        this.setState({
            notes: [...this.state.notes, newNote]
            //<NewTodoForm createNote={this.create} 
            //{this.state.notes.note}   
        });
    }

    /* handleGuess(evt) {
        let ltr = evt.target.value;
        this.setState(st => ({
          guessed: st.guessed.add(ltr),
          nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }));

                            <Todo todo={notes}/>
                            removeNote={this.delete(allNotes.id)}

      } */


    render(){
        const allNotes = this.state.notes.map(note =>(

            <Todo
            note = {note.note}
            id = {note.id}
            removeNote={() => this.delete(note.id)}
            handleClick = {() => this.isToggle(note.id)}
            clicked = {this.state.isToggle}
            
            />      
            
        ));
        return(
             <div>
                 <h1>Todo List</h1>
                 
                 <p>
                    <NewTodoForm createNote={this.create}/>   
                 </p>
                       
                    {allNotes}

                
             </div>           
        );
    }
}

export default ToDoList;

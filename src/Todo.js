import React, { Component } from 'react'
import './Todo.css';

class Todo extends Component {

    render(){
        return(
            <div>
                <div className={
                    this.props.clicked 
                    ? "crossed-line"
                    : null
                } 
                onClick={this.props.handleClick}
               >
                <p>{this.props.note}</p>
                <button onClick={this.props.removeNote}>X</button>
                </div>
                
            </div>
        )
    }
}

export default Todo;
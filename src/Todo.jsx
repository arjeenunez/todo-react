import React, { Component } from "react";
import "./Todo.css"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            yourTodo: this.props.task,
            isComplete: false
        }
        this.handleRemTask = this.handleRemTask.bind(this);
        this.handleEditTask = this.handleEditTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }
    handleChange(evt) {
        this.setState(st => ({
            [evt.target.name]: evt.target.value
        }))
    }
    handleRemTask(evt) {
        this.props.remTask(this.props.ident);
    }
    handleEditTask(evt) {
        this.props.editTask(this.state.yourTodo, this.props.ident);
        this.setState(st => ({
            isEdit: false,
            
        }))
    }
    handleToggle(evt) {
        this.setState(st => ({
            isEdit: true,
        }))
    }
    toggleComplete(evt) {
        this.setState(st => ({
            isComplete: st.isComplete ? false : true
        }))
    }
    render() {
        let listItem;
        let marked = this.state.isComplete ? "Todo-listItem-content-complete" : "Todo-listItem-content"
        if (this.state.isEdit) {
            listItem = (<li className="Todo-listItem">
                            <div className="Todo-listItem-container">
                                <input type="text" id="yourTodo" name="yourTodo" value={this.state.yourTodo} onChange={this.handleChange} />
                                <button onClick={this.handleEditTask}>💾</button>
                            </div>
                        </li>)
        } else {
            listItem = (<li className="Todo-listItem">
                            <div className="Todo-listItem-container">
                                <span className={marked} onClick={this.toggleComplete}>{this.props.task}</span>
                                <div>
                                    <button onClick={this.handleToggle}>✏️</button>
                                    <button onClick={this.handleRemTask}>🗑️</button>
                                </div>
                            </div>
                        </li>)
        }
        console.log(this.state.isComplete);
        return (
            <div>
                {listItem}
            </div>
        )
    }
}

export default Todo;
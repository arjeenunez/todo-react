import React, { Component } from "react";
import Todo from "./Todo"
import Todoform from "./Todoform";
import { v4 as uuid } from "uuid"
import "./Todolist.css"

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ task: "Take out the milk", id: uuid() }, { task: "Throw away the trash", id: uuid() }]
        }
        this.addTask = this.addTask.bind(this);
        this.remTask = this.remTask.bind(this);
        this.editTask = this.editTask.bind(this);
    }
    addTask(newTask) {
        this.setState(st => ({
            todos: [...st.todos, { task: newTask, id: uuid() }]
        }))
    }
    remTask(taskIndex) {
        this.setState(st => ({
            todos: st.todos.filter((el, i) => i !== taskIndex)
        }))
    }
    editTask(editTask, taskIndex) {
        this.setState(st => ({
            todos: st.todos.map((el, i) => i === taskIndex ? {task: editTask, id: el.id} : el)
        }))
    }
    render() {
        const todos = this.state.todos;
        return (
            <div className="Todolist">
                <div className="Todolist-header">
                    <h1>TODO List!</h1>
                    <p>A simple react to do list app.</p>
                </div>
                <ul className="Todolist-list">
                    {todos.map((el, i) => (
                        <Todo key={el.id} task={el.task} ident={i} remTask={this.remTask} editTask={ this.editTask } />
                    ))}
                </ul>
                <Todoform addTask={this.addTask} />
            </div>
        )
    }
}

export default Todolist
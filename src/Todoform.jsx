import React, { Component } from "react";
import "./Todoform.css"

class Todoform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yourTodo: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(evt) {
        evt.preventDefault();
        this.setState(st => ({
            [evt.target.name]: evt.target.value
        }))
    }
    handleClick(evt) {
        evt.preventDefault();
        this.props.addTask(this.state.yourTodo);
        this.setState(st => ({ yourTodo: "" }));
    }
    render() {
        return (
            <div className="Todoform">
                <h3>New Todo</h3>
                <form className="Todoform-container">
                    <input type="text" id="yourTodo" name="yourTodo" placeholder="What's your to do?" value={ this.state.yourTodo } onChange={this.handleChange} />
                    <button onClick={this.handleClick}>💾</button>
                </form>
            </div>
        )
    }

}

export default Todoform;
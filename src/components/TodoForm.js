import React, { Component } from "react";
import Select from "./Select";
import TodoInput from "./TodoInput";

import "./TodoForm.css";

export default class TodoForm extends Component {
  render() {
    return (
      <div className="todo-form-container">
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <TodoInput
            id="new-todo"
            handleChange={this.props.handleChange}
            value={this.props.value}
          />

          <button>{`Add #${this.props.items.length + 1}`}</button>

          {/* Pridať submit do form */}
        </form>

        <Select handleOption={this.props.handleOption} />
      </div>
    );
  }
}

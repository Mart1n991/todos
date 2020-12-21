import React, { Component } from "react";
import Select from "./Select";
import TodoInput from "./TodoInput";

import "./TodoForm.css";

export default class TodoForm extends Component {
  render() {
    const {
      handleOption,
      handleChange,
      handleSubmit,
      items,
      value,
    } = this.props;

    return (
      <div className="todo-form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <TodoInput id="new-todo" handleChange={handleChange} value={value} />

          <button>{`Add #${items.length + 1}`}</button>
        </form>

        <Select handleOption={handleOption} />
      </div>
    );
  }
}

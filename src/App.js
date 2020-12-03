import React from "react";
import TodoForm from "./components/TodoForm";

//Import components
import TodoList from "./components/TodoList";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <TodoForm
          items={this.state.items}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.text}
        />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: [...state.items, newItem],
      text: "",
    }));
  }
}

export default TodoApp;

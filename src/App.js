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
    this.deleteTodo = this.deleteTodo.bind(this);
    this.softDeleteTodo = this.softDeleteTodo.bind(this);
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        <h3>TODO</h3>
        <TodoList
          items={this.state.items}
          deleteTodo={this.deleteTodo}
          softDeleteTodo={this.softDeleteTodo}
        />
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
      completed: false,
    };
    this.setState((state) => ({
      items: [...state.items, newItem],
      text: "",
    }));
  }

  //Function delete todo
  deleteTodo(item) {
    const updateItems = this.state.items.filter(
      (element) => element.id !== item.id
    );

    this.setState(() => ({
      items: updateItems,
    }));
  }

  softDeleteTodo(item) {
    const completedItems = this.state.items.map((element) => {
      if (element.id === item.id) {
        return { ...element, completed: !element.completed };
      }
      return element;
    });

    this.setState(() => ({
      items: completedItems,
    }));
  }
}

export default TodoApp;

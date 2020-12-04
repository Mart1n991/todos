import React from "react";
import TodoForm from "./components/TodoForm";

//Import components
import TodoList from "./components/TodoList";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", option: "all" };
  }

  render() {
    return (
      <div className="app-container">
        <h3>TODO</h3>
        <TodoForm
          items={this.state.items}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleOption={this.handleOption}
          value={this.state.text}
        />
        <TodoList
          items={this.state.items}
          deleteTodo={this.deleteTodo}
          softDeleteTodo={this.softDeleteTodo}
        />
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
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
  };

  //Function delete todo
  deleteTodo = (item) => {
    const updateItems = this.state.items.filter(
      (element) => element.id !== item.id
    );

    this.setState(() => ({
      items: updateItems,
    }));
  };

  //Function softdeleteTodo
  softDeleteTodo = (item) => {
    const completedItems = this.state.items.map((element) => {
      if (element.id === item.id) {
        return { ...element, completed: !element.completed };
      }
      return element;
    });

    this.setState(() => ({
      items: completedItems,
    }));
  };

  handleOption = (event) => {
    this.setState({ option: event.target.value });
  };
}

export default TodoApp;

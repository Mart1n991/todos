import React from "react";
import TodoForm from "./components/TodoForm";

//Import components
import TodoList from "./components/TodoList";

//Function for filter todos in the array
const filteredTodos = (option, todos) => {
  switch (option) {
    case "completed":
      return todos.filter((todo) => todo.completed);

    case "uncompleted":
      return todos.filter((todo) => todo.completed === false);

    default:
      return todos;
  }
};

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
          items={filteredTodos(this.state.option, this.state.items)}
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
    this.setState((state) => ({
      items: state.items.filter((element) => element.id !== item.id),
    }));
  };

  //Function softdeleteTodo
  softDeleteTodo = (item) => {
    this.setState((state) => ({
      items: state.items.map((element) => {
        if (element.id === item.id) {
          return { ...element, completed: !element.completed };
        }
        return element;
      }),
    }));
  };

  //Set state according to which option was selected
  handleOption = (event) => {
    this.setState({ option: event.target.value });
  };
}

export default TodoApp;

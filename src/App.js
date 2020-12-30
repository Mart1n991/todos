import React from "react";

//Import components
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

//Import store from redux
import store from "./redux/store";

//Import Provider
import { Provider } from "react-redux";

class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-container">
          <h3>TODO</h3>
          <TodoForm />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default TodoApp;

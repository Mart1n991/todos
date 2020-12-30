import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";

//Function for filter todos depend on choosen option.
const choosenOption = (option, todos) => {
  switch (option) {
    case "COMPLETED":
      return todos.filter((todo) => todo.completed);

    case "UNCOMPLETED":
      return todos.filter((todo) => todo.completed === false);

    default:
      return todos;
  }
};

class TodoList extends Component {
  render() {
    const { deleteTodo, todos, toggleTodo, visibility } = this.props;

    //Filtered todos depend on choosen option
    const filterTodos = choosenOption(visibility, todos);

    return (
      <div>
        {filterTodos.map((item) => (
          <Todo
            key={item.id}
            text={item.text}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            item={item}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibility: state.visibility,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

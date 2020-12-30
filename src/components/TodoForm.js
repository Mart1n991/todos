import React, { Component } from "react";
import { connect } from "react-redux";

//Import components
import Select from "./Select";
import TodoInput from "./TodoInput";

//Import styles
import "./TodoForm.css";

//Import actions
import { addTodo } from "../redux/actions";

class TodoForm extends Component {
  state = {
    text: "",
  };

  handleChangeText = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  addTodo = (event, text) => {
    event.preventDefault();

    //condition if input field is empty
    if (this.state.text.length === 0) {
      window.alert("What is your next task?");
    } else {
      //update redux store
      this.props.addTodo(text);

      //Update local state
      this.setState({ text: "" });
    }
  };

  render() {
    const { handleOption, todos } = this.props;

    return (
      <div className="todo-form-container">
        <form onSubmit={(event) => this.addTodo(event, this.state.text)}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <TodoInput
            id="new-todo"
            handleChangeText={this.handleChangeText}
            value={this.state.text}
          />

          <button>{`Add #${todos.length + 1}`}</button>
        </form>

        <Select handleOption={handleOption} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

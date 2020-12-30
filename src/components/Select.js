import React, { Component } from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../redux/actions";
// import { completedTodos, uncompletedTodos } from "../redux/actions";

class Select extends Component {
  //Update state (visibility) depend on choosen option
  filterTodos = (event) => {
    this.props.setVisibilityFilter(event.target.value);
  };

  render() {
    return (
      <select onChange={this.filterTodos}>
        <option value="SHOW_ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="UNCOMPLETED">Uncompleted</option>
      </select>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visibility: state.visibility,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);

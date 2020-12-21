import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { id, handleChange, value } = this.props;
    return (
      <>
        <input autoFocus id={id} onChange={handleChange} value={value} />
      </>
    );
  }
}

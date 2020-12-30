import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { id, handleChangeText, value } = this.props;
    return (
      <>
        <input autoFocus id={id} onChange={handleChangeText} value={value} />
      </>
    );
  }
}

import React from "react";

export default function TodoForm({ items, handleChange, handleSubmit, value }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">What needs to be done?</label>
      <input id="new-todo" onChange={handleChange} value={value} />
      <button>{`Add #${items.length + 1}`}</button>
    </form>
  );
}

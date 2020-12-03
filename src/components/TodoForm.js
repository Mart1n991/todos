import React from "react";

export default function TodoForm({ items, handleChange, handleSubmit, value }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">What needs to be done?</label>
      <input autoFocus id="new-todo" onChange={handleChange} value={value} />
      <button>{`Add #${items.length + 1}`}</button>

      <select>
        <option>All</option>
        <option>Completed</option>
        <option>Uncompleted</option>
      </select>
    </form>
  );
}

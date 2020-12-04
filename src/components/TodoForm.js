import React from "react";
import TodoInput from "./TodoInput";

export default function TodoForm({
  items,
  handleChange,
  handleSubmit,
  value,
  handleOption,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">What needs to be done?</label>
      <TodoInput id="new-todo" handleChange={handleChange} value={value} />

      <button>{`Add #${items.length + 1}`}</button>

      <select onChange={handleOption}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
}

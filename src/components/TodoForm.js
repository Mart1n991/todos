import React from "react";
import Select from "./Select";
import TodoInput from "./TodoInput";

export default function TodoForm({
  items,
  handleChange,
  handleSubmit,
  value,
  handleOption,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <TodoInput id="new-todo" handleChange={handleChange} value={value} />

        <button>{`Add #${items.length + 1}`}</button>

        {/* Pridať submit do form */}
      </form>

      <Select handleOption={handleOption} />
    </div>
  );
}

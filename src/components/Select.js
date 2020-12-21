import React from "react";

export default function Select({ handleOption }) {
  return (
    <select onChange={handleOption}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  );
}

import React from "react";
import Todo from "./Todo";

export default function TodoList({ items }) {
  return (
    <div>
      <ul>
        <Todo items={items} />
      </ul>
    </div>
  );
}

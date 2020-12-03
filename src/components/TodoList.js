import React from "react";
import Todo from "./Todo";

export default function TodoList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Todo key={item.id} text={item.text} />
      ))}
    </div>
  );
}

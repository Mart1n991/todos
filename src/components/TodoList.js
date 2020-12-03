import React from "react";
import Todo from "./Todo";

export default function TodoList({ items, deleteTodo }) {
  return (
    <div>
      {items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          deleteTodo={deleteTodo}
          item={item}
        />
      ))}
    </div>
  );
}

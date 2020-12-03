import React from "react";

//Import icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ text, deleteTodo, item, softDeleteTodo }) {
  return (
    <div className={`todo ${item.completed ? "todo-completed" : ""}`}>
      <li>{text}</li>
      <FontAwesomeIcon
        icon={faCheckSquare}
        onClick={() => {
          softDeleteTodo(item);
        }}
      />
      <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTodo(item)} />
    </div>
  );
}

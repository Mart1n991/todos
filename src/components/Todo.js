import React from "react";

//Import icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ text, deleteTodo, item, softDeleteTodo }) {
  return (
    <div className={`todo ${item.completed ? "todo-completed" : ""}`}>
      <li>{text}</li>
      <div className="icon-container">
        <FontAwesomeIcon
          icon={faCheckSquare}
          onClick={() => {
            softDeleteTodo(item);
          }}
          className="icon"
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => deleteTodo(item)}
          className="icon"
        />
      </div>
    </div>
  );
}

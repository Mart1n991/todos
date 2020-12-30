import React from "react";

//Import icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

//import styles
import "./Todo.css";

export default function Todo({ text, deleteTodo, item, toggleTodo }) {
  return (
    <div className={`todo ${item.completed ? "todo-completed" : ""}`}>
      <li>{text}</li>
      <div className="icon-container">
        <FontAwesomeIcon
          icon={faCheckSquare}
          onClick={() => {
            toggleTodo(item.id);
          }}
          className="icon"
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => deleteTodo(item.id)}
          className="icon"
        />
      </div>
    </div>
  );
}

import React from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";
import "./Todo.css";

function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{todo.title}</p>
      <button>
        {" "}
        <RiDeleteBin4Fill className="delete" />
      </button>
    </div>
  );
}

export default TodoItem;

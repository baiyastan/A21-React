import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";

function Todo() {
  const [list, setList] = useState([
    { title: "Hello", completed: false, id: 1 },
  ]);

  function addTodoHandler(text) {
    const newTodo = {
      title: text,
      completed: false,
      id: list.length + 1,
    };
    setList([...list, newTodo]);
  }

  console.log(list);
  return (
    <div className="todo">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={list} />
    </div>
  );
}

export default Todo;

import React from "react";
import "./TodoHeader.css"
import TodoForm from "../TodoForm/TodoForm";
export default function TodoHeader({
  handleSubmit,
  handleClearAll,
  todos,
}) {
  return (
    <div className="todo-header">
      <TodoForm handleSubmit={handleSubmit} />
      {todos.length > 0 && (
        <button onClick={handleClearAll}>clear all tasks</button>
      )}
    </div>
  );
}

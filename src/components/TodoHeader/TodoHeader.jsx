import React from "react";
import "./TodoHeader.css";
import TodoForm from "../TodoForm/TodoForm";
export default function TodoHeader({
  handleSubmit,
  handleClearAll,
  handleCheckAll,
  todos,
}) {
  return (
    <div className="todo-header">
      <TodoForm handleSubmit={handleSubmit} />
      {todos.length > 0 && (
        <div className="d-flex flex-row gap-10px">
          <button onClick={handleClearAll}>clear all tasks</button>
          <button onClick={handleCheckAll}>check all</button>
        </div>
      )}
    </div>
  );
}

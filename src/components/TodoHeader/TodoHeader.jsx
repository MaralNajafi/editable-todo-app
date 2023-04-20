import React from "react";
import "./TodoHeader.css";
import TodoForm from "../TodoForm/TodoForm";
export default function TodoHeader({
  handleSubmit,
  handleClearAll,
  handleCheckAll,
  handleUncheckAll,
  todos,
}) {
  return (
    <div className="todo-header">
      <h1>Your todo</h1>
      <TodoForm handleSubmit={handleSubmit} />
      {todos.length > 0 && (
        <div className="d-flex flex-row gap-10px">
          <button onClick={handleClearAll}>clear all tasks</button>
          <button onClick={handleCheckAll}>check all</button>
          <button onClick={handleUncheckAll}>uncheck all</button>
        </div>
      )}
    </div>
  );
}

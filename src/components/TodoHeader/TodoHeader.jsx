import React from "react";
import TodoForm from "../TodoForm/TodoForm";
export default function TodoHeader({
  handleSubmit,
  handleClearAll,
  todos,
}) {
  return (
    <div>
      <TodoForm handleSubmit={handleSubmit} />
      {todos.length > 0 && (
        <button onClick={handleClearAll}>clear all tasks</button>
      )}
    </div>
  );
}

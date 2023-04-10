import React, { useState } from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoBody from "../TodoBody/TodoBody";

export default function AppContainer() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  function addTodo(newTodo) {
    setId(id + 1);
    setTodos([
      ...todos,
      {
        content: newTodo,
        dateCreated: new Date().toLocaleTimeString(),
        isChecked: false,
        id: id,
      },
    ]);
  }

  function findTodoIndex(id) {
    const TodoIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });

    return TodoIndex;
  }

  function handleChange(event, id) {
    const TodoIndex = findTodoIndex(id);
    setTodos((todos) => {
      todos[TodoIndex].content = event.target.value;
      return [...todos];
    });
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleCheck(id) {
    const TodoIndex = findTodoIndex(id);
    const checkState = todos[TodoIndex].isChecked;
    setTodos((todos) => {
      todos[TodoIndex].isChecked = !checkState;
      return [...todos];
    });
  }

  function handleClearAll() {
    if (todos.length > 0) {
      setTodos([]);
    }
  }

  return (
    <div className="app-container">
      <TodoHeader
        todos={todos}
        handleSubmit={addTodo}
        handleClearAll={handleClearAll}
      />
      <TodoBody
        todos={todos}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    </div>
  );
}
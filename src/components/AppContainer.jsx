import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

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
        isDisabled: false,
        id: id,
      },
    ]);
  }

  function handleChange(event, id) {
    const changeIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });

    setTodos((prevTodos) => {
      prevTodos[changeIndex].content = event.target.value;
      return [...prevTodos];
    });
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <TodoForm handleSubmit={addTodo} />
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <br />
              <Todo
                content={todo.content}
                handleDelete={() => {
                  handleDelete(todo.id);
                }}
                handleEdit={(event) => {
                  handleChange(event, todo.id);
                }}
              />

              <br />
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}

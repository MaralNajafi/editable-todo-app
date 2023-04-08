import React, { useState } from "react";
import TodoForm from "./TodoForm";

export default function AppContainer() {
  const [todos, setTodos] = useState([]);
  const [isReadonly, setIsReadonly] = useState(true);
  const [id, setId] = useState(0);

  function addTodo(newTodo) {
    setId(id + 1);
    setTodos([
      ...todos,
      {
        content: newTodo,
        dateCreated: new Date().toLocaleTimeString(),
        isDelete: false,
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
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <TodoForm handleSubmit={addTodo} />
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <br />
              <input
                type="text"
                value={todo.content}
                readOnly={isReadonly}
                onClick={() => {
                  setIsReadonly(false);
                }}
                onChange={(event) => {
                  handleChange(event, todo.id);
                }}
              />
              <button onClick={() => {
                handleDelete(todo.id)
              }}>delete</button>
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}

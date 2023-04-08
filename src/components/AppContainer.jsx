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

  function handleCheck(id) {
    const changeIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });
    setTodos((prevTodos) => {
      prevTodos[changeIndex] = {
        ...prevTodos[changeIndex],
        isChecked: true,
        isDisabled: true,
      };
      return [...prevTodos];
    });
  }

  function handleBlur(event, id) {
    if (event.target.value === "" || !event.target.value) {
      handleDelete(id);
    }
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
                disabled={todo.isDisabled}
                onClick={() => {
                  setIsReadonly(false);
                }}
                onChange={(event) => {
                  handleChange(event, todo.id);
                }}
                onBlur={(event) => {
                  handleBlur(event, todo.id);
                }}
                className={todo.isChecked && "checked"}
              />
              <button
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  handleCheck(todo.id);
                }}
                className={todo.isChecked && "d-none"}
              >
                check
              </button>
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}

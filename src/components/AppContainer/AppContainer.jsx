import React, { useEffect, useState } from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoBody from "../TodoBody/TodoBody";

const AppContainer = () => {
  const [todos, setTodos] = useState([]);
  const [searchedTodos, setSearchedTodos] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [id, setId] = useState(0);

  const addTodo = (newTodo) => {
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
  };

  const findTodoIndex = (id) => {
    const TodoIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });

    return TodoIndex;
  };

  const handleChange = (event, id) => {
    const TodoIndex = findTodoIndex(id);
    setTodos((todos) => {
      todos[TodoIndex].content = event.target.value;
      return [...todos];
    });
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id) => {
    const TodoIndex = findTodoIndex(id);
    const checkState = todos[TodoIndex].isChecked;
    setTodos((todos) => {
      todos[TodoIndex].isChecked = !checkState;
      return [...todos];
    });
  };

  const handleClearAll = () => {
    if (todos.length > 0) {
      setTodos([]);
    }
  };

  const handleSearch = () => {
    setSearchedTodos(
      todos.filter((todo) =>
        todo.content.includes(searchedValue.toLocaleLowerCase())
      )
    );
  };

  useEffect(() => {
    handleSearch();
  }, [searchedValue, todos]);

  return (
    <div className="app-container">
      <TodoHeader
        todos={todos}
        handleSubmit={addTodo}
        handleClearAll={handleClearAll}
      />
      {todos.length > 0 && (
        <input
          type="text"
          placeholder="search tasks"
          value={searchedValue}
          onChange={(event) => {
            setSearchedValue(event.target.value);
          }}
        />
      )}
      <TodoBody
        todos={searchedTodos.length > 0 ? searchedTodos : todos}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    </div>
  );
};

export default AppContainer;

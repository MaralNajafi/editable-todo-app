import React, { useEffect, useState } from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoBody from "../TodoBody/TodoBody";
import SearchTodo from "../SearchTodo/SearchTodo";
import "./AppContainer.css";
const AppContainer = () => {
  const [todos, setTodos] = useState([]);
  const [searchedTodos, setSearchedTodos] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [id, setId] = useState(0);

  const addTodo = (newTodo) => {
    setId(new Date().getTime());
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
    const newTodos = [...todos];
    newTodos[TodoIndex].content = event.target.value;
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const handleCheck = (id) => {
    const TodoIndex = findTodoIndex(id);
    const newTodos = [...todos];
    newTodos[TodoIndex].isChecked = !newTodos[TodoIndex].isChecked;
    setTodos(newTodos);
  };

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.isChecked = true;
    });
    setTodos(newTodos);
  };

  const handleUncheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.isChecked = false;
    });
    setTodos(newTodos);
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  const handleSearch = () => {
    if (searchedValue === "") return setSearchedTodos(todos);
    if (todos.length === 0) return setSearchedTodos([]);

    const searchResult = todos.filter((todo) =>
      todo.content.toLowerCase().includes(searchedValue.toLocaleLowerCase())
    );
    setSearchedTodos(searchResult);
  };

  useEffect(() => {
    handleSearch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedValue, todos.length]);

  return (
    <div className="app-container">
      <TodoHeader
        todos={todos}
        handleSubmit={addTodo}
        handleClearAll={handleClearAll}
        handleCheckAll={handleCheckAll}
        handleUncheckAll={handleUncheckAll}
      />
      {todos.length > 0 && (
        <SearchTodo
          searchedValue={searchedValue}
          setSearchedValue={setSearchedValue}
        />
      )}
      <TodoBody
        todos={searchedTodos}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    </div>
  );
};

export default AppContainer;

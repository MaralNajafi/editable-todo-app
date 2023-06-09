import React, { useEffect, useState } from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoBody from "../TodoBody/TodoBody";
import SearchTodo from "../SearchTodo/SearchTodo";
import "./AppContainer.css";
import MainFooter from "../MainFooter/MainFooter";
const AppContainer = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todo list")) || []
  );
  const [searchedTodos, setSearchedTodos] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [id, setId] = useState(new Date().getTime());
  const addTodo = (newTodo) => {
    setId(new Date().getTime());
    setTodos([
      ...todos,
      {
        content: newTodo,
        dateCreated: new Date().toLocaleString(),
        dateModified: null,
        isChecked: false,
        isDeleted: false,
        id: id,
      },
    ]);
  };

  const addTodosToLocalStorage = () => {
    localStorage.setItem("todo list", JSON.stringify(todos));
  };

  useEffect(() => {
    addTodosToLocalStorage();
    // eslint-disable-next-line
  }, [todos]);

  const findTodoIndex = (id) => {
    const TodoIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });

    return TodoIndex;
  };

  const handleChange = (event, id) => {
    const TodoIndex = findTodoIndex(id);
    const newContent = event.target.innerText;
    const prevContent = todos[TodoIndex].content;
    const newTodos = [...todos];
    if (newContent !== prevContent) {
      newTodos[TodoIndex].content = newContent;
      newTodos[TodoIndex].dateModified = new Date().toLocaleString();
      setTodos(newTodos);
    } else {
      return;
    }
  };

  const handleDelete = (id) => {
    const TodoIndex = findTodoIndex(id);
    const newTodos = [...todos];
    newTodos[TodoIndex].isDeleted = true;
    setTodos(newTodos);
    setTimeout(() => {
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodos);
    }, 250);
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
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.isDeleted = true;
    });
    setTodos(newTodos);
    setTimeout(() => {
      setTodos([]);
    }, 250);
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
    <div className="app-container d-flex flex-col">
      <div className="todo-app d-flex flex-col">
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
      <MainFooter />
    </div>
  );
};

export default AppContainer;

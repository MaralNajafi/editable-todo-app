import React from "react";
import Todo from "./Todo";

export default function TodosContainer({ todos, handleDelete, handleChange }) {
  const todo = todos.map((todo) => {
    return (
      <>
        <br />
        <Todo
          key={todo.id}
          content={todo.content}
          handleDelete={() => {
            handleDelete(todo.id);
          }}
          handleEdit={(event) => {
            handleChange(event, todo.id);
          }}
        />
      </>
    );
  });
  return <div>{todo}</div>;
}

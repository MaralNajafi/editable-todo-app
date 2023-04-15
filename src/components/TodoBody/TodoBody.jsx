import React from "react";
import Todo from "../Todo/Todo";

export default function TodosBody({
  todos,
  handleDelete,
  handleChange,
  handleCheck,
}) {
  const todo = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        dateCreated={todo.dateCreated}
        dateModified={todo.dateModified}
        content={todo.content}
        isChecked={todo.isChecked}
        isDeleted={todo.isDeleted}
        handleDelete={() => {
          handleDelete(todo.id);
        }}
        handleEdit={(event) => {
          handleChange(event, todo.id);
        }}
        handleCheck={() => {
          handleCheck(todo.id);
        }}
      />
    );
  });
  if (todos.length === 0) {
    return <p>No tasks yet</p>;
  } else {
    return <ul className="d-flex flex-col gap-20px">{todo}</ul>;
  }
}

import React from "react";
import Todo from "../Todo/Todo";
import "./TodoBody.css";

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
  return (
    <div className={`todo-body flex-grow-1 ${todos.length === 0 ? "d-flex jc-center ai-center" : ""}`}>
      {todos.length === 0 ? <p>No tasks yet</p> : <ul className="d-flex gap-20px">{todo}</ul>}
      
    </div>
  );
}

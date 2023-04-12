import React, { useState } from "react";
import "./TodoForm.css"
export default function TodoForm({handleSubmit}) {
  const [inputValue, setInputValue] = useState("");
  function handleSubmitForm(e) {
    e.preventDefault();
    handleSubmit(inputValue)
    setInputValue("");
  }
  return (
    <form className="todo-form d-flex flex-row jc-space-between gap-10px" onSubmit={handleSubmitForm}>
      <input
        value={inputValue}
        placeholder="Type your task..."
        type="text"
        name="todoContent"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        required
        className="flex-grow-1"
      />
      <button type="submit">Add</button>
    </form>
  );
}

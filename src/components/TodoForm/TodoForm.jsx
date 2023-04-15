import React, { useState } from "react";
import "./TodoForm.css";
import SVG from "../SVG/SVG";

export default function TodoForm({ handleSubmit }) {
  const [inputValue, setInputValue] = useState("");
  function handleSubmitForm(e) {
    e.preventDefault();
    handleSubmit(inputValue);
    setInputValue("");
  }
  return (
    <form
      className="todo-form d-flex flex-row jc-space-between gap-10px"
      onSubmit={handleSubmitForm}
    >
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
      <button type="submit">
        <SVG id={"add"}/>
      </button>
    </form>
  );
}

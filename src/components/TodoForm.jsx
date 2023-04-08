import React, { useState } from "react";

export default function TodoForm({handleSubmit}) {
  const [inputValue, setInputValue] = useState("");
  function handleSubmitForm(e) {
    e.preventDefault();
    handleSubmit(inputValue)
    setInputValue("");
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        value={inputValue}
        type="text"
        name="todoContent"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
}

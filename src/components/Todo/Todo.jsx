import React, { useState, useRef } from "react";

export default function Todo({
  content,
  handleDelete,
  handleEdit,
  handleCheck,
  isChecked,
}) {
  const [isReadonly, setIsReadonly] = useState(true);
  const editableInput = useRef();

  function handleBlur(event) {
    setIsReadonly(true)
    if (event.target.value === "" || !event.target.value) {
      handleDelete();
    }
  }

  function handleFocus() {
    setIsReadonly(false)
    editableInput.current.focus();
  }
  return (
    <li className="todo">
      <input
        ref={editableInput}
        type="text"
        value={content}
        readOnly={isReadonly}
        disabled={isChecked && true}
        className={isChecked ? "checked" : ""}
        onClick={() => {
          setIsReadonly(false);
        }}
        onBlur={handleBlur}
        onChange={handleEdit}
      />
      <button onClick={handleFocus}>edit</button>
      <button onClick={handleCheck}>{isChecked ? "uncheck" : "check"}</button>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
}

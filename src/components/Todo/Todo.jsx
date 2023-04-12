import React, { useState, useRef } from "react";
import "./Todo.css";

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
    setIsReadonly(true);
    if (event.target.value === "" || !event.target.value) {
      handleDelete();
    }
  }

  function handleFocus() {
    setIsReadonly(false);
    editableInput.current.focus();
  }
  return (
    <li className="todo d-flex flex-row jc-space-between ai-center">
      <input
        ref={editableInput}
        type="text"
        value={content}
        readOnly={isReadonly}
        disabled={isChecked && true}
        className={`flex-grow-1 ${isChecked ? "checked" : ""}`}
        onClick={() => {
          setIsReadonly(false);
        }}
        onBlur={handleBlur}
        onChange={handleEdit}
      />
      <div className="buttons d-flex flex-row gap-10px">
        <button className="edit-btn" disabled={isChecked} onClick={handleFocus}>
          edit
        </button>
        <button className="check-btn" onClick={handleCheck}>
          {isChecked ? "uncheck" : "check"}
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
}

import React, { useState, useRef } from "react";
import "./Todo.css";
import SVG from "../SVG/SVG";

export default function Todo({
  content,
  dateCreated,
  dateModified,
  handleDelete,
  handleEdit,
  handleCheck,
  isChecked,
  isDeleted,
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
    <li className={`todo ${isDeleted ? "deleted" : ""}`}>
      <div className="todo-field d-flex flex-row jc-space-between ai-center ">
        <button onClick={handleCheck}>
          <SVG id={"check"} fill={isChecked ? "blue" : "transparent"} />
        </button>

        <input
          ref={editableInput}
          type="text"
          value={content}
          readOnly={isReadonly}
          disabled={isChecked && true}
          className={`flex-grow-1 todo-input ${isChecked ? "checked" : ""}`}
          onClick={() => {
            setIsReadonly(false);
          }}
          onBlur={handleBlur}
          onChange={handleEdit}
        />
        <span className="input-underline"></span>
        <div className="buttons d-flex flex-row gap-10px">
          <button
            className="edit-btn"
            onClick={handleFocus}
            disabled={isChecked}
          >
            <SVG id={"edit"} />
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            <SVG id={"trashcan"} />
          </button>
        </div>
      </div>
      <div className="todo-date">
        <div>date created: {dateCreated}</div>
        {dateModified && <div>Date modified: {dateModified}</div>}
      </div>
    </li>
  );
}

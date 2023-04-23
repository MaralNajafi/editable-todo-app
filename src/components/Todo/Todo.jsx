import React, { useRef } from "react";
import "./Todo.css";
import SVG from "../SVG/SVG";
import { useState } from "react";

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
  const editableInput = useRef();
  const [isEditing, setIsEditing] = useState(false);

  function handleBlur(event) {
    if (event.target.innerText === "" || !event.target.innerText) {
      handleDelete();
    }
    handleEdit(event);

    setIsEditing(false);
  }

  function handleFocus() {
    setIsEditing(true);
    editableInput.current.focus();
  }
  return (
    <li className={`todo ${isDeleted ? "deleted" : ""}`}>
      <div className="todo-field d-flex flex-row ai-center ">
        <button onClick={handleCheck}>
          <SVG id={"check"} fill={isChecked ? "blue" : "transparent"} />
        </button>

        <span
          contentEditable={isChecked ? false : ""}
          ref={editableInput}
          className={`flex-grow-1 todo-input ${isChecked ? "checked" : ""}`}
          onBlur={ handleBlur}
          onFocus={() => {
            setIsEditing(true);
          }}
        >
          {content}
        </span>
        <span className="input-underline"></span>
        <div className="buttons d-flex flex-row gap-10px">
          <button
            className={`edit-btn ${isEditing ? "editing" : ""}`}
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
        <div>created: {dateCreated}</div>
        {dateModified && <div>modified: {dateModified}</div>}
      </div>
    </li>
  );
}
